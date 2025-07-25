
// ExpenseList.jsx
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Pencil, Trash2 } from 'lucide-react';
import DateFilter from './DateFilter';

const ExpenseList = ({ expenses, onDelete, onEdit }) => {
  const { toast } = useToast();
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', amount: '' });
  const [deleteId, setDeleteId] = useState(null);

  // 🔽 New state for date filtering
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleEditClick = (expense) => {
    setEditingId(expense._id);
    setEditForm({ title: expense.title, amount: expense.amount });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!editForm.title || !editForm.amount) return;

    await onEdit(editingId, { ...editForm, amount: parseFloat(editForm.amount) });
    toast({ title: 'Expense updated successfully' });
    setEditingId(null);
  };

  const handleDeleteConfirm = async () => {
    await onDelete(deleteId);
    toast({ title: 'Expense deleted successfully' });
    setDeleteId(null);
  };

  // 🔽 Filter expenses by date
  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.createdAt);
    const from = fromDate ? new Date(fromDate) : null;
    const to = toDate ? new Date(toDate) : null;

    return (
      (!from || expenseDate >= from) &&
      (!to || expenseDate <= to)
    );
  });

  return (
    <div className="bg-white p-4 rounded shadow space-y-4">
      <h2 className="text-xl font-semibold">Expenses</h2>

      {/* 🔽 Date Filter Component */}
      <DateFilter
        fromDate={fromDate}
        toDate={toDate}
        onFromChange={(e) => setFromDate(e.target.value)}
        onToChange={(e) => setToDate(e.target.value)}
      />

      {filteredExpenses.length === 0 && <p className="text-gray-500">No expenses found in this date range.</p>}

      {filteredExpenses.map((expense) =>
        editingId === expense._id ? (
          <form key={expense._id} onSubmit={handleEditSubmit} className="grid grid-cols-3 gap-2 items-center">
            <Input
              name="title"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              placeholder="Title"
            />
            <Input
              name="amount"
              type="number"
              value={editForm.amount}
              onChange={(e) => setEditForm({ ...editForm, amount: e.target.value })}
              placeholder="Amount"
            />
            <div className="flex gap-2">
              <Button type="submit" size="sm">Save</Button>
              <Button type="button" variant="outline" size="sm" onClick={() => setEditingId(null)}>Cancel</Button>
            </div>
          </form>
        ) : (
          <div
            key={expense._id}
            className="flex justify-between items-center border p-2 rounded hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">{expense.title}</p>
              <p className="text-sm text-gray-500">${expense.amount.toFixed(2)}</p>
              <p className="text-xs text-gray-400">{new Date(expense.createdAt).toLocaleDateString()}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => handleEditClick(expense)}>
                <Pencil className="w-4 h-4 text-blue-500" />
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setDeleteId(expense._id)}>
                    <Trash2 className="w-4 h-4 text-red-500" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <p className="text-sm text-gray-600">Are you sure you want to delete this expense?</p>
                  <DialogFooter className="flex justify-end gap-2 mt-4">
                    <Button variant="outline" onClick={() => setDeleteId(null)}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDeleteConfirm}>Delete</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ExpenseList;
