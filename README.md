# 🤖 AI Resume Checker

<p align="center">
  An AI-powered tool that analyzes your resume against a job description, identifies skill gaps, and helps you improve your resume for the role.
</p>

<p align="center">
  <a href="https://resume-checker-kn95l7dlz-homie8.vercel.app/">🚀 Live Demo</a> •
  <a href="https://github.com/puff9808-ctrl/resume-checker">📂 GitHub Repository</a>
</p>

---

## ✨ Features

- **Resume Match Score:** Get a score from 0–100 indicating how well your resume matches a job description.
- **Matched Skills:** Identify skills in your resume that align with the target role.
- **Missing Skills:** Discover relevant skills that may be missing from your resume.
- **AI Resume Improvements:** Generate 3–5 improved resume bullet points tailored to the job description.
- **Automatic Retries:** Retry failed AI requests when the service is temporarily busy.
- **Secure API Integration:** Keep the Gemini API key on the server instead of exposing it in frontend code.
- **Simple User Interface:** Analyze your resume using a straightforward web interface.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling and layout |
| JavaScript | Frontend functionality |
| Node.js | Server-side API processing |
| Google Gemini API | AI-powered resume analysis |
| Vercel | Serverless backend and deployment |
| Git & GitHub | Version control |

## ⚙️ How It Works

1. Paste your resume text and the job description.
2. The frontend sends both inputs to the `/api/analyze` endpoint.
3. The serverless function sends a structured prompt to the Gemini API.
4. The backend processes the response and retries failed requests when necessary.
5. The application displays the match score, matched skills, missing skills, and improved resume bullet points.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- A Google Gemini API key
- Vercel CLI

### 1. Clone the Repository

```bash
git clone https://github.com/puff9808-ctrl/resume-checker.git
cd resume-checker
```

### 2. Install the Vercel CLI

```bash
npm install -g vercel
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Replace `your_gemini_api_key` with your own API key.

**Security:** Never commit your `.env` file or expose your API key in client-side JavaScript. Keep secrets in environment variables.

### 4. Start the Development Server

```bash
vercel dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## 📁 Project Structure

```text
resume-checker/
├── api/
│   └── analyze.js
├── index.html
├── vercel.json
├── .env
└── README.md
```

- `index.html` — Frontend interface and client-side logic.
- `api/analyze.js` — Serverless function that communicates with the Gemini API.
- `vercel.json` — Vercel configuration.
- `.env` — Local environment variables; do not commit this file.
- `README.md` — Project documentation.

## 🌐 Live Demo

Try the application:

**[AI Resume Checker — Live Website](https://resume-checker-kn95l7dlz-homie8.vercel.app/)**

## 🔐 Security

- Store the Gemini API key in environment variables.
- Never expose API credentials in frontend code.
- Configure production environment variables in your Vercel project settings.
- Avoid sharing resumes containing sensitive personal information unnecessarily.

## 🔮 Future Improvements

- Support PDF resume uploads.
- Save previous resume analysis results.
- Add downloadable reports.
- Improve job-specific keyword analysis.
- Add automated tests for prompt handling and response parsing.

## 📚 What I Learned

- Integrating an AI model into a web application.
- Generating and parsing structured JSON responses.
- Building serverless API endpoints with Node.js.
- Protecting API keys using environment variables.
- Handling API failures with retry logic.
- Deploying and debugging applications using Vercel.

## 👨‍💻 Author

**Bhukya Gowtham Naik**

- GitHub: [@puff9808-ctrl](https://github.com/puff9808-ctrl)
- Portfolio: [Visit my portfolio](https://portfolio-homie8.vercel.app/)

---

<p align="center">
  Built with ❤️ using JavaScript, Node.js, and Google Gemini AI.
</p>
