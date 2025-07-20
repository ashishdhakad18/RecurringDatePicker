import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DaySelector = () => {
  const { weekDays, setWeekDays, frequency } = useRecurrence();

  if (frequency !== "weekly") return null;

  const toggleDay = (day) => {
    setWeekDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div>
      <label className="block font-semibold mb-1">Select Weekdays:</label>
      <div className="flex gap-2 flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => toggleDay(day)}
            className={`px-3 py-1 rounded border ${weekDays.includes(day) ? "bg-blue-500 text-white" : "bg-white"}`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;