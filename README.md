# 🧑‍💻 AI Code Reviewer

An AI-powered code reviewing tool built with **React + Vite + Tailwind CSS**.  
Paste your code, select a language, and get instant **AI feedback, bug detection, and suggestions**.

---

## 🚀 Features
- 📝 Paste and edit code in an interactive editor  
- 🌐 Choose programming language (default: JavaScript)  
- 🤖 AI-powered code analysis & review  
- 📊 Suggestions, improvements, and bug explanations  
- 🕒 Code history with exact timestamps  
- ⚡ Built with **Vite** for super-fast development  
- 🎨 Styled using **Tailwind CSS**  
- 🧭 Clean navigation with **React Router**  

---

## 📂 Project Structure
src/
├── components/
│ ├── Header.jsx # App header with navigation
│ ├── Home.jsx # Main landing page
│ ├── CodeInput.jsx # Input area for code + language selection
│ ├── Result.jsx # Displays AI review results
│ └── ui/ # Reusable UI components (buttons, cards, etc.)
├── context/
│ └── InputContext.jsx # Global context for code, language, and results
├── App.jsx # App layout + routing
├── main.jsx # Entry point
└── index.css # Tailwind CSS styles

yaml
Copy code

---

## ⚙️ Tech Stack
- **Frontend**: React (Vite)  
- **Styling**: Tailwind CSS + ShadCN/UI + Lucide Icons  
- **Routing**: React Router DOM  
- **State Management**: React Context API  
- **Backend (Planned)**: OpenAI / Gemini API for code review  

src/
├── components/
│ ├── Header.jsx # App header with navigation
│ ├── Home.jsx # Main landing page
│ ├── CodeInput.jsx # Input area for code + language selection
│ ├── Result.jsx # Displays AI review results
│ └── ui/ # Reusable UI components (buttons, cards, etc.)
├── context/
│ └── InputContext.jsx # Global context for code, language, and results
├── App.jsx # App layout + routing
├── main.jsx # Entry point
└── index.css # Tailwind CSS styles
---

## ⚙️ Tech Stack
- **Frontend**: React (Vite)  
- **Styling**: Tailwind CSS + ShadCN/UI + Lucide Icons  
- **Routing**: React Router DOM  
- **State Management**: React Context API  
- **Backend (Planned)**: OpenAI / Gemini API for code review  

---
🔮 Future Improvements

🔐 Authentication (save reviews per user)

💾 Persistent history with localStorage / database

🌓 Dark mode support

📤 Export reviews as PDF / Markdown

🎤 Voice input for code snippets

