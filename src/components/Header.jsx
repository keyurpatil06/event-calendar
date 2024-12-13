import React from 'react'
import { Button } from './ui/button'

const Header = ({ currentDate, setCurrentDate }) => {
  const handlePreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  return (
    <header className="flex justify-between items-center mb-6">
      <Button onClick={handlePreviousMonth}>Previous</Button>
      <h1 className="text-xl font-bold">
        {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </h1>
      <Button onClick={handleNextMonth}>Next</Button>
    </header>
  )
}

export default Header
