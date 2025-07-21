MERN Fitness Tracker App - README

# MERN Fitness Tracker App

A full-stack fitness tracking app built with the MERN stack (MongoDB, Express, React, Node.js) that allows users to:
- Register and log in securely
- Track daily exercise (in minutes)
- View weekly summaries and progress
- Visualize performance with charts
- Celebrate streaks and milestones
- Use the app on desktop or mobile

---

## 🚀 Features
- **Authentication**: JWT-based login/register.
- **User-specific Data**: Each user only sees their own exercises.
- **Add/Edit/Delete Exercises**.
- **Weekly Dashboard**: Total minutes, average/day, goal %.
- **Charts**: Visualize daily performance with bar charts.
- **Streak Tracking**: Track consistent workout days.
- **Mobile Responsive** UI using TailwindCSS.
- **Notifications**: Alerts for missing daily goals (basic version).
- **Protected Routes**.

---

## 🛠️ Tech Stack

### Frontend:
- React (Vite)
- Tailwind CSS + ShadCN UI
- Chart.js

### Backend:
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---

## 📂 Folder Structure (Simplified)
```
root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── index.html
```

---

## ⚙️ Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/mern-fitness-tracker.git
cd mern-fitness-tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# MONGO_URI=your_mongo_connection
# JWT_SECRET=your_secret_key
npm run dev
```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

In `backend/.env`:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/fitnessDB
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Testing

Tests coming soon. Use Postman or browser DevTools to verify:
- Registration & Login
- Add/edit/delete exercise
- Weekly summary appears correctly

---

## 📱 Mobile Support

- Fully responsive using Tailwind breakpoints.
- Try resizing the browser or inspecting via Chrome DevTools → Mobile View.

---

## 📤 Deployment

### Backend (Render)
1. Push backend to GitHub
2. Create a new Render Web Service
3. Set build command: `npm install && npm run dev`
4. Add environment variables

### Frontend (Vercel)
1. Push frontend to GitHub
2. Connect to Vercel
3. Set environment variable: `VITE_BACKEND_URL=https://your-backend-url.onrender.com`

---

## 👨‍💻 Author
Stephen Okoth

---

## 📄 License
MIT License

