export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { resume, job } = req.body || {};
  if (!resume || !job) return res.status(400).json({ error: "Resume and job description are required." });

  const prompt = `You are a strict recruiter. Compare the resume to the job description.
Reply with ONLY valid JSON in this exact shape, with no extra text:
{"score": <0-100 integer>, "matched_skills": [string], "missing_skills": [string], "improved_bullets": [string]}
Give 3-5 improved_bullets: rewrite weak resume lines to be stronger, specific, and tied to the job.

RESUME:
${resume}

JOB DESCRIPTION:
${job}`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${process.env.GEMINI_API_KEY}`;
  let lastError = "Unknown error";

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const r = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });
      const data = await r.json();
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (text) {
        const clean = text.replace(/```json|```/g, "").trim();
        return res.status(200).json(JSON.parse(clean));
      }
      lastError = data?.error?.message || JSON.stringify(data);
    } catch (e) {
      lastError = e.message;
    }
    await new Promise((ok) => setTimeout(ok, 2000 * attempt));
  }

  res.status(500).json({ error: "AI error: " + lastError });
}
