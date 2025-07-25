💸 MERN Expense Tracker App
A full-featured Expense Tracker built with the MERN stack (MongoDB, Express, React, Node.js). Track your spending, set monthly goals, view category breakdowns, and filter by date.
🚀 Live Demo
Frontend (Vercel): https://your-frontend.vercel.app
Backend (Render): https://your-backend.onrender.com
🛠️ Tech Stack

- Frontend: React, Vite, Tailwind CSS, ShadCN UI, Recharts, Toast Notifications
- Backend: Express.js, MongoDB (Atlas), Mongoose, JWT Authentication
- Hosting: Vercel (frontend) + Render (backend)
- Other Features: Protected Routes, Chart Visualization, Budget Progress Bar, Date Filtering, Categories, Confirmation Modals

📂 Folder Structure

client/       # React frontend (Vite + Tailwind + ShadCN)
 └── src/
     ├── components/
     ├── context/
     ├── pages/
     ├── services/
     └── App.jsx

server/       # Node.js + Express backend
 ├── controllers/
 ├── models/
 ├── routes/
 ├── middleware/
 └── server.js

🧑‍💻 Local Setup Instructions
1. Clone the repository

git clone https://github.com/your-username/mern-expense-tracker.git
cd mern-expense-tracker

2. Setup Backend

cd server
npm install

Create a `.env` file:

PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret

Start the server:
npm run dev
3. Setup Frontend

cd ../client
npm install

Update `.env`:
VITE_API_URL=https://your-backend.onrender.com/api
Start the app:
npm run dev
🌐 Deployment
Backend (Render)

1. Create a new web service on https://render.com
2. Connect to GitHub repo → Select `server` folder
3. Set environment variables (MONGO_URI, JWT_SECRET)
4. Build Command: npm install
5. Start Command: node server.js

Frontend (Vercel)

1. Push `client` folder to GitHub
2. Import project in https://vercel.com
3. Set env: VITE_API_URL=https://your-backend.onrender.com/api
4. Framework: Vite

✅ Features

- User authentication (register/login)
- Add, edit, and delete expenses
- Date filtering with date picker
- Categories: Food, Transport, Utilities, etc.
- Visualize data with charts (Recharts)
- Budget goal tracking with progress bar
- Dashboard summary with balance display
- Toast notifications and modals

✅ Future Improvements

- Export to CSV or PDF
- Recurring expenses
- Email reminders
- Admin dashboard

📸 Screenshots
> Add your own screenshots here.
📄 License
MIT
🙌 Acknowledgements
Inspired by modern finance apps and full-stack tutorials.
