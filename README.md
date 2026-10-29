# AI Resume Checker

Paste your resume and a job description to get a match score, matched and missing skills, and rewritten bullet points.

**Live demo:** https://resume-checker-kn95l7dlz-homie8.vercel.app/

## Features
- Match score (0-100) between a resume and a job description
- Lists of skills you have and skills you're missing
- 3-5 improved resume bullet points tailored to the job
- Automatic retries when the AI service is busy

## Tech stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js serverless function on Vercel
- **AI:** Google Gemini API (`gemini-3.5-flash-lite`)
- **Hosting:** Vercel

## How it works
1. The browser sends the resume and job description to `/api/analyze`.
2. The serverless function builds a prompt that asks the model for JSON only.
3. The function calls the Gemini API and retries up to 3 times if it fails.
4. The JSON result is cleaned, parsed, and rendered on the page.

The API key is stored as a Vercel environment variable, so it is never exposed in the browser.

## Run locally
1. Install the Vercel CLI: `npm i -g vercel`
2. Create a `.env` file containing `GEMINI_API_KEY=your_key_here`
3. Run `vercel dev` and open http://localhost:3000

## Project structure
```
index.html        UI and client-side logic
api/analyze.js    Serverless function that calls the AI
vercel.json       Function timeout settings
```

## What I learned
- Keeping API keys secure with a serverless backend
- Prompting an LLM for structured JSON output
- Handling model changes and overloaded APIs with retries
- Deploying and debugging on Vercel

## Future improvements
- Upload PDF resumes instead of pasting text
- Save past results
- Add tests for the prompt and response parsing
