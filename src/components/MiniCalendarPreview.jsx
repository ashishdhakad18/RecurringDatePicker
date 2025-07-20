import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";
import { getRecurringDates } from "../utils/recurrenceUtils";

const MiniCalendarPreview = () => {
  const { frequency, interval, startDate, endDate, weekDays } = useRecurrence();

  const dates = getRecurringDates({
    frequency,
    interval,
    startDate,
    endDate,
    weekDays
  });

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">📅 Mini Calendar Preview:</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-700">
        {dates.slice(0, 20).map((date, i) => (
          <div key={i} className="p-2 bg-blue-100 rounded text-center">
            {date.toDateString()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendarPreview;
