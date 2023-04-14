import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarProps from "react-calendar";
import "react-calendar/dist/Calendar.css";

function ElegantCalendar(): JSX.Element {
  const [date, setDate] = useState<Date>(new Date());

  const onChange: CalendarProps["onChange"] = (value: Date | Date[]) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 15l6-6m0 0l6 6m-6-6v9"
            />
          </svg>
          <span className="text-lg font-medium text-gray-900">
            {date.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <Calendar
          value={date}
          className="border border-gray-300"
        />
      </div>
    </div>
  );
}

export default ElegantCalendar;
