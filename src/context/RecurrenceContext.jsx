// src/context/RecurrenceContext.jsx
import React, { createContext, useContext, useState } from "react";

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [frequency, setFrequency] = useState("daily");
  const [interval, setInterval] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weekDays, setWeekDays] = useState([]);

  return (
    <RecurrenceContext.Provider
      value={{
        frequency,
        setFrequency,
        interval,
        setInterval,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        weekDays,
        setWeekDays
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
