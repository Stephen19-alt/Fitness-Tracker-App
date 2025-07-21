// File: src/pages/NotFound.jsx
// This page displays a 404 error when a route is not found
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">
        <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
      </p>
    </div>
  );
}
