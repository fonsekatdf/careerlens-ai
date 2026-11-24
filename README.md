# CareerLens AI

**An AI-powered resume analysis and job matching platform.**

CareerLens AI helps job seekers understand how their resumes align with job opportunities through Natural Language Processing, machine learning, semantic similarity and explainable analysis.

## Project Objectives

- Extract relevant information from PDF and DOCX resumes.
- Analyze job descriptions and identify required qualifications.
- Match candidate skills against job requirements.
- Identify skill gaps and areas for improvement.
- Generate explainable resume improvement recommendations.
- Provide an interactive dashboard for viewing analysis results.

## Technology Stack

**Frontend**
- React
- TypeScript
- Vite
- Tailwind CSS

**Backend**
- Python
- FastAPI
- Pydantic

**AI / Machine Learning**
- Scikit-learn
- spaCy
- Sentence Transformers

**Database and Infrastructure**
- PostgreSQL
- SQLAlchemy
- Alembic
- Docker
- GitHub Actions

## Architecture

CareerLens AI uses a modular monolithic backend architecture with a separate React frontend.

The frontend communicates with the backend through REST APIs. Resume processing, NLP and matching operations are handled by dedicated backend services.

## Repository Structure

```text
careerlens-ai/
├── frontend/
├── backend/
├── docs/
├── .github/
├── .env.example
├── .gitignore
└── README.md
```

## Local Development

### Backend

```bash
cd backend
python -m venv .venv
```

Activate the virtual environment and install dependencies:

```bash
pip install -r requirements.txt
```

Run the backend:

```bash
uvicorn app.main:app --reload
```

API documentation: http://localhost:8000/docs

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173

## Testing

Backend:

```bash
cd backend
python -m pytest -v
```

Frontend:

```bash
cd frontend
npm run build
```

## Development Workflow

- `main`: Stable and production-ready code.
- `dev`: Integration branch.
- `feature/*`: Individual feature branches.

We follow Conventional Commits and use Pull Requests to integrate features.

## Project Status

Currently under development.

## License

This project is licensed under the MIT License.