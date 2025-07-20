import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const DateRangePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrence();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block font-semibold mb-1">Start Date:</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">End Date (optional):</label>
        <input
          type="date"
          className="border rounded p-2 w-full"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateRangePicker;