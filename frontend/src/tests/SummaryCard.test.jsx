// File: frontend/src/tests/SummaryCard.test.jsx
// This test checks the SummaryCard component for displaying weekly exercise data
import { render, screen } from '@testing-library/react';
import SummaryCard from '../components/SummaryCard';

test('displays weekly summary info', () => {
  render(<SummaryCard totalMinutes={210} averagePerDay={30} goalPercent={100} />);
  expect(screen.getByText(/Total Minutes: 210/i)).toBeInTheDocument();
});
