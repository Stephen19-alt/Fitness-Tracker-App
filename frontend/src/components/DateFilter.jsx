// DateFilter.jsx
// This file defines a date filter component for selecting a date range.
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const DateFilter = ({ fromDate, toDate, onFromChange, onToChange }) => {
  return (
    <div className="flex gap-4 items-center mb-4">
      <div>
        <label className="text-sm">From:</label>
        <DatePicker
          selected={fromDate}
          onChange={onFromChange}
          dateFormat="yyyy-MM-dd"
          className="border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="text-sm">To:</label>
        <DatePicker
          selected={toDate}
          onChange={onToChange}
          dateFormat="yyyy-MM-dd"
          className="border rounded px-2 py-1"
        />
      </div>
    </div>
  );
};

export default DateFilter;
