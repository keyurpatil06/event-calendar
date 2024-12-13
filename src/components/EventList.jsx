import React from 'react'
import { Button } from './ui/button'

const EventList = ({ selectedDay, currentDate, events, handleDeleteEvent }) => {
  const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${selectedDay}`;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Events for {selectedDay}:</h2>
      {(events[key] || []).map((event, index) => (
        <div key={index} className="p-2 border rounded-md mb-2 bg-gray-100">
          <div className="text-sm font-semibold">
            <span>{event.name} ({event.start} - {event.end})</span>
            <p>{event.description}</p>
          </div>
          <Button
            variant="destructive"
            size="sm"
            className="mt-1"
            onClick={() => handleDeleteEvent(key, index)}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  )
}

export default EventList
