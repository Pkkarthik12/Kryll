# Kryll

A sleek, modern, and high-performance AI workspace prototype built with **Python (FastAPI)** and **Vanilla JS/CSS**. This application features a premium "glassmorphic" UI designed to provide a seamless chat experience with integrated "Artifact" generation for code and documents.

![Preview Placeholder](https://via.placeholder.com/1200x600/0f1115/e2e8f0?text=Kryll+Preview)

## ✨ Features

- **Split-Pane Interface:** Simultaneous chat and artifact viewing.
- **Glassmorphic Design:** Premium dark-themed UI with subtle glow effects and modern typography.
- **Dynamic Artifacts:** AI-generated code snippets and documents are automatically rendered in a dedicated preview panel.
- **Responsive Layout:** Sidebar can be toggled for a focused workspace or mobile viewing.
- **FastAPI Backend:** Asynchronous, high-performance API handling.
- **No Heavy Dependencies:** The frontend uses pure Vanilla JavaScript and CSS for maximum speed and zero build time.

## 🚀 Getting Started

### Prerequisites

- Python 3.8+

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/kryll.git
   cd kryll
   ```

2. **Install dependencies:**
   ```bash
   pip install -r backend/requirements.txt
   ```

3. **Run the application:**
   ```bash
   python backend/main.py
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8000` to start using Kryll.

## 🛠️ Project Structure

- `backend/`: FastAPI application, API routes, and AI services.
- `frontend/`: Pure HTML/CSS/JS assets served by the backend.
- `api/`: Modular API endpoints for chat and document handling.
- `services/`: Core logic for LLM integration (includes a robust mock service for demo purposes).

## 🧩 Architecture

The project follows a clean, decoupled architecture:
- **Backend:** FastAPI serves as the glue, handling API requests and serving static frontend files.
- **AI Service:** A pluggable service layer that can be easily extended to support OpenAI, Gemini, or Anthropic.
- **Frontend:** Managed through a central `app.js` that handles state, UI updates, and API communication.

## 📄 License

MIT License - feel free to use this project for your own portfolio!
