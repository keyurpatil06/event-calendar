import React from 'react'
import { cn, getRandomColor, daysOfWeek } from '../lib/utils'

const CalendarGrid = ({ days, currentDate, events, selectedDay, setSelectedDay }) => {
  return (
    <div className="grid grid-cols-7 gap-4 border p-4 rounded-md bg-gray-50">
      {daysOfWeek.map(day => (
        <div key={day} className="text-center font-bold">{day}</div>
      ))}
      {days.map((day, index) => (
        <div
          key={index}
          className={cn(`px-4 py-1 md:p-4 border rounded-md cursor-pointer ${day ? 'bg-white' : 'bg-gray-200 cursor-not-allowed'} ${day === selectedDay ? 'bg-gray-300' : ''}`, getRandomColor(day, currentDate, events))}
          onClick={() => day && setSelectedDay(day)}
        >
          <div className="flex items-center justify-center font-medium">{day}</div>
        </div>
      ))}
    </div>
  )
}

export default CalendarGrid
