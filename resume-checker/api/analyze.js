// Vercel serverless function: keeps your API key secret on the server
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { resume, job } = req.body || {};
  if (!resume || !job) return res.status(400).json({ error: "Resume and job description are required." });

  const prompt = `You are a strict recruiter. Compare the resume to the job description.
Reply with ONLY valid JSON in this exact shape:
{"score": <0-100 integer>, "matched_skills": [string], "missing_skills": [string], "improved_bullets": [string]}
Give 3-5 improved_bullets: rewrite weak resume lines to be stronger, specific, and tied to the job.

RESUME:
${resume}

JOB DESCRIPTION:
${job}`;

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
      }
    );
    const data = await r.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) return res.status(500).json({ error: data?.error?.message || JSON.stringify(data) });
    res.status(200).json(JSON.parse(text));
  } catch (e) {
    res.status(500).json({ error: "Something went wrong: " + e.message });
  }
}
