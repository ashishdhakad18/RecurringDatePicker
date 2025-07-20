import React from "react";
import { useRecurrence } from "../context/RecurrenceContext";

const CustomRepeatSettings = () => {
  const { interval, setInterval, frequency } = useRecurrence();

  return (
    <div>
      <label className="block font-semibold mb-1">
        Every X {frequency}(s):
      </label>
      <input
        type="number"
        className="border rounded p-2 w-full"
        value={interval}
        onChange={(e) => setInterval(e.target.value)}
        min="1"
      />
    </div>
  );
};

export default CustomRepeatSettings;