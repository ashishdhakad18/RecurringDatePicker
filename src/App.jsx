import React from "react";
import { RecurrenceProvider } from "./context/RecurrenceContext";
import RecurringDatePicker from "./components/RecurringDatePicker";

export default function App() {
  return (
    <RecurrenceProvider>
      <div className="min-h-screen bg-gray-500 p-4">
        <h1 className="text-2xl font-bold mb-4">Recurring Date Picker</h1>
        <RecurringDatePicker />
      </div>
    </RecurrenceProvider>
  );
}