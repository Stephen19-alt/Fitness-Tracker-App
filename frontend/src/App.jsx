// App.jsx
// This file is the main application component that sets up routing and authentication context.
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { useAuth } from "./context/AuthContext";

const App = () => {
	const { user } = useAuth();

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
			<Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
			<Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
		</Routes>
	);
};

export default App;
