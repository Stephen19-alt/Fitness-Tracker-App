// frontend/src/services/api.js
// This file contains API service functions for user authentication and expense management.
import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000/api",
});

// Attach token to requests
API.interceptors.request.use((config) => {
	const user = JSON.parse(localStorage.getItem("user"));
	if (user?.token) {
		config.headers.Authorization = `Bearer ${user.token}`;
	}
	return config;
});

export const loginUser = (data) => API.post("/users/login", data);
export const registerUser = (data) => API.post("/users/register", data);

export const fetchExpenses = () => API.get("/expenses");
export const createExpense = (data) => API.post("/expenses", data);
export const deleteExpense = (id) => API.delete(`/expenses/${id}`);

// Exported functions for user authentication
export const getAllExpenses = async () => {
  const response = await API.get('/expenses');
  return response.data;
};

export const getExpenses = async () => {
  const res = await API.get('/api/expenses');
  return res.data;
};

export const addExpense = async (expense) => {
  const res = await API.post('/api/expenses', expense);
  return res.data;
};

// src/services/api.js

export const editExpense = async (id, updatedExpense) => {
  const response = await fetch(`/api/expenses/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedExpense),
  });

  if (!response.ok) {
    throw new Error('Failed to update expense');
  }

  return await response.json();
};


