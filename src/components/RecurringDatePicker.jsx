import React from "react";
import RecurrenceOptions from "./RecurrenceOptions";
import CustomRepeatSettings from "./CustomRepeatSettings";
import DaySelector from "./DaySelector";
import DateRangePicker from "./DateRangePicker";
import MiniCalendarPreview from "./MiniCalendarPreview";

const RecurringDatePicker = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <RecurrenceOptions />
      <CustomRepeatSettings />
      <DaySelector />
      <DateRangePicker />
      <MiniCalendarPreview />
    </div>
  );
};

export default RecurringDatePicker;