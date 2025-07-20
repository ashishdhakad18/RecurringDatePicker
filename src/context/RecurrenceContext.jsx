export function getRecurringDates({
  frequency,
  interval,
  startDate,
  endDate,
  weekDays = []
}) {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date(start);
  end.setFullYear(end.getFullYear() + 1); // fallback 1 year if no end

  const result = [];
  let current = new Date(start);

  while (current <= end) {
    const dayName = current.toLocaleDateString("en-US", { weekday: "short" });

    if (frequency === "daily") {
      result.push(new Date(current));
      current.setDate(current.getDate() + parseInt(interval));
    } else if (frequency === "weekly") {
      if (weekDays.includes(dayName)) result.push(new Date(current));
      current.setDate(current.getDate() + 1);
    } else if (frequency === "monthly") {
      result.push(new Date(current));
      current.setMonth(current.getMonth() + parseInt(interval));
    } else if (frequency === "yearly") {
      result.push(new Date(current));
      current.setFullYear(current.getFullYear() + parseInt(interval));
    }
  }

  return result;
}
