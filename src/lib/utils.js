import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getRandomColor = (day, currentDate, events) => {
  const key = `${currentDate.getFullYear()}-${currentDate.getMonth()}-${day}`;
  const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];

  const hasEvents = events[key]?.length > 0;
  const randomColor = hasEvents ? colors[day % colors.length] : '';

  return randomColor;
}

export const getDaysInMonth = (year, month) => {
  const days = [];
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(i);
  }

  return days;
}

export const exportToCSV = () => {
  const eventsForCurrentMonth = Object.keys(events).filter(key => {
    const [year, month, day] = key.split('-');
    return parseInt(year) === currentDate.getFullYear() && parseInt(month) === currentDate.getMonth();
  }).reduce((acc, key) => {
    acc[key] = events[key];
    return acc;
  }, {});

  const rows = [['Date', 'Event Name', 'Start Time', 'End Time', 'Description']];
  Object.keys(eventsForCurrentMonth).forEach(dayKey => {
    eventsForCurrentMonth[dayKey].forEach(event => {
      const [year, month, day] = dayKey.split('-');
      rows.push([`${day}-${month + 1}-${year}`, event.name, event.start, event.end, event.description]);
    });
  });

  let csvContent = "data:text/csv;charset=utf-8,";
  rows.forEach(row => {
    csvContent += row.join(',') + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const a = document.createElement('a');
  a.href = encodedUri;
  a.download = `events-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}.csv`;
  a.click();
};

export const exportToJSON = () => {
  const eventsForCurrentMonth = Object.keys(events).filter(key => {
    const [year, month, day] = key.split('-');
    return parseInt(year) === currentDate.getFullYear() && parseInt(month) === currentDate.getMonth();
  }).reduce((acc, key) => {
    acc[key] = events[key];
    return acc;
  }, {});

  const blob = new Blob([JSON.stringify(eventsForCurrentMonth, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `events-${currentDate.getFullYear()}-${currentDate.getMonth() + 1}.json`;
  a.click();
  URL.revokeObjectURL(url);
};