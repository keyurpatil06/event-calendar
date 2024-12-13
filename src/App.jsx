import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import CalendarGrid from './components/CalendarGrid';
import EventList from './components/EventList';
import EventDialog from './components/EventDialog';
import { exportToCSV, exportToJSON, getDaysInMonth } from './lib/utils';
import { Button } from './components/ui/button';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem('events')) || {});
  const [selectedDay, setSelectedDay] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', start: '', end: '', description: '' });

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setDays(getDaysInMonth(year, month));
  }, [currentDate]);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const handleAddEvent = () => {
    if (!selectedDay) return;
    const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${selectedDay}`;
    setEvents(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), newEvent],
    }));
    setShowDialog(false);
    setNewEvent({ name: '', start: '', end: '', description: '' });
  };

  const handleDeleteEvent = (dayKey, index) => {
    const updatedEvents = { ...events };
    updatedEvents[dayKey].splice(index, 1);
    setEvents(updatedEvents);
  };  

  return (
    <div className="p-6 font-sans">
      <Header
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <CalendarGrid
        days={days}
        currentDate={currentDate}
        events={events}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      {selectedDay && (
        <>
          <EventList
            selectedDay={selectedDay}
            currentDate={currentDate}
            events={events}
            handleDeleteEvent={handleDeleteEvent}
          />
          <EventDialog
            showDialog={showDialog}
            setShowDialog={setShowDialog}
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
          />
        </>
      )}

      <div className="mt-4 flex justify-end space-x-4">
        <Button
          onClick={exportToJSON}
          className="px-4 py-2 rounded"
        >
          Export as JSON
        </Button>
        <Button
          onClick={exportToCSV}
          className="px-4 py-2 rounded"
        >
          Export as CSV
        </Button>
      </div>
    </div>
  );
};

export default App;