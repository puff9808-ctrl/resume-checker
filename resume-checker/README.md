# Resume Checker

Paste a resume and a job description to get a match score, matched and missing skills, and improved bullet points.

**Stack:** HTML/JS frontend, Vercel serverless function, Gemini API
**Live demo:** (add your Vercel link)

## How it works
Browser -> POST /api/analyze -> serverless function calls the LLM with a JSON-only prompt -> returns structured results -> page renders them.
The API key stays on the server as an environment variable.

## Run locally
1. `npm i -g vercel`
2. Add `GEMINI_API_KEY=your_key` to a `.env` file
3. `vercel dev`
