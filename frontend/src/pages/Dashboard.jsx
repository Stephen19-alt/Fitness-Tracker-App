
// Dashboard.jsx
// This file defines the main dashboard component for the frontend application.
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/context/AuthContext';
import {
  getExpenses,
  deleteExpense,
  editExpense
} from '@/services/api';

import Header from '@/components/Header';
import ExpenseChart from '@/components/ExpenseChart';
import ExpenseForm from '@/components/ExpenseForm';
import ExpenseList from '@/components/ExpenseList';

import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import BudgetProgress from '@/components/BudgetProgress';
import DateFilter from '@/components/DateFilter';
import Balance from '@/components/Balance';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const { toast } = useToast();

  const [expenses, setExpenses] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [expenseToDelete, setExpenseToDelete] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    if (!user) return navigate('/login');
    fetchExpenses();
  }, [user]);

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();
      setExpenses(data);
    } catch (err) {
      console.error(err);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to load expenses.' });
    }
  };

  const handleDelete = async () => {
    if (!expenseToDelete) return;

    try {
      await deleteExpense(expenseToDelete);
      toast({ title: 'Deleted', description: 'Expense deleted successfully.' });
      setConfirmOpen(false);
      setExpenseToDelete(null);
      fetchExpenses();
    } catch (err) {
      console.error('Delete failed:', err);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to delete expense.' });
    }
  };

  const confirmDelete = (id) => {
    setExpenseToDelete(id);
    setConfirmOpen(true);
  };

  const handleEdit = async (id, updatedData) => {
    try {
      await editExpense(id, updatedData);
      toast({ title: 'Updated', description: 'Expense updated successfully.' });
      fetchExpenses();
    } catch (err) {
      console.error('Edit failed:', err);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to update expense.' });
    }
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const balance = 1000 - total;
  const progress = Math.min((total / 1000) * 100, 100);

  const filteredExpenses = expenses.filter((e) => {
    const date = new Date(e.date);
    return (
      (!fromDate || date >= fromDate) &&
      (!toDate || date <= toDate)
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={logout} />
      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <Card className="p-4 text-lg font-semibold">
          Welcome back, {user?.username || 'User'}! 👋
        </Card>

        <Card className="p-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <h2 className="text-sm text-gray-500">Total Spent</h2>
            <p className="text-2xl font-bold text-red-500">${total.toFixed(2)}</p>
          </div>
          <div>
            <h2 className="text-sm text-gray-500">Balance (Assumed $1000)</h2>
            <p className="text-2xl font-bold text-green-600">${balance.toFixed(2)}</p>
          </div>
        </Card>

        {/* Budget Progress */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="mb-2 text-sm font-medium text-gray-700">Budget Progress</h3>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${progress > 80 ? 'bg-red-500' : 'bg-green-500'}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">{progress.toFixed(0)}% of $1000 budget used</p>
        </div>

        <BudgetProgress total={total} goal={1000} />

        <ExpenseChart expenses={expenses} />

        <DateFilter
          fromDate={fromDate}
          toDate={toDate}
          setFromDate={setFromDate}
          setToDate={setToDate}
        />

        <ExpenseForm onAdd={fetchExpenses} />

        <ExpenseList
          expenses={filteredExpenses}
          onDelete={confirmDelete}
          onEdit={handleEdit}
        />
      </main>

      {/* Delete Confirmation Dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>Are you sure you want to delete this expense?</DialogDescription>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={handleDelete}>Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
