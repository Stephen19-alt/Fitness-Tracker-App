// frontend/src/components/Header.jsx
// This file defines the header component for the frontend application.
import { Button } from '@/components/ui/button';

const Header = ({ onLogout }) => (
  <header className="bg-white shadow p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">💸 Expense Tracker</h1>
    <Button variant="outline" onClick={onLogout}>Logout</Button>
  </header>
);

export default Header;
