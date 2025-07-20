import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const options = ["daily", "weekly", "monthly", "yearly"];

const RecurrenceOptions = () => {
  const { frequency, setFrequency } = useRecurrence();

  return (
    <div>
      <label className="block font-semibold mb-1">Recurrence Frequency:</label>
      <select
        className="border rounded p-2 w-full"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RecurrenceOptions;