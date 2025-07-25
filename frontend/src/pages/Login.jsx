// frontend/src/pages/Login.jsx
// This file contains the login page component for the frontend application.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Login = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({ email: "", password: "" });

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await loginUser(formData);
			login(res.data);
			navigate("/dashboard");
		} catch (err) {
			alert("Login failed: " + err.response?.data?.message);
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50">
			<Card className="w-[400px] shadow-xl">
				<CardContent className="space-y-4 pt-6">
					<h2 className="text-2xl font-semibold text-center">Login</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input type="email" name="email" value={formData.email} onChange={handleChange} required />
						</div>
						<div>
							<Label htmlFor="password">Password</Label>
							<Input type="password" name="password" value={formData.password} onChange={handleChange} required />
						</div>
						<Button type="submit" className="w-full">Login</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Login;
