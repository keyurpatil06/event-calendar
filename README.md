# Dynamic Event Calendar Application
A dynamic event calendar application that allows users to manage, view, and export events.

## Features

1. **Calendar View**:
   - Displays a fully functional calendar grid for the current month with all days properly aligned.
   - Users can navigate between months using "Previous" and "Next" buttons.

2. **Event Management**:
   - Add, edit, and delete events for each day.
   - Each event includes event name, start and end times, and an optional description.
   - Events are stored locally, allowing them to persist between page refreshes.

3. **Event List**:
   - Displays a list of all events for the selected day.

4. **Data Persistence**:
   - Uses `localStorage` to save events, ensuring data remains intact across page reloads.

5. **Export Functionality**:
   - Allows users to export the event list for the current month as a **JSON** or **CSV** file.

## Tech Stack

- **ReactJS**
- **ShadCN**
- **TailwindCSS**

## Running Locally

1. Clone the repository
`git clone https://github.com/keyurpatil06/event-calendar.git`

2. Navigate into the project folder
`cd event-calendar`

3. Install dependencies
`npm install`

4. Run the development server
`npm run dev`

## Deployed Link
Click here -
[Event Calendar](https://dynamic-event-calendar-application.netlify.app/)