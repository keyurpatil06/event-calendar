import React from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Label } from './ui/label'

const EventDialog = ({ showDialog, setShowDialog, newEvent, setNewEvent, handleAddEvent }) => {
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogTrigger asChild>
        <Button className="mt-2">Add Event</Button>
      </DialogTrigger>
      <DialogContent className="p-6 bg-white rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Add Event</DialogTitle>
          <DialogDescription className="text-sm text-gray-600 mb-4">
            Fill in the details of your event below.
          </DialogDescription>
        </DialogHeader>
        <Input
          className="mb-4"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
        />

        <div>
          <Label className='ml-1' htmlFor="start">Start Time</Label>
          <Input
            className="mb-4"
            type="time"
            id="start"
            value={newEvent.start}
            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
          />
        </div>

        <div>
          <Label className='ml-1' htmlFor="end">End Time</Label>
          <Input
            className="mb-4"
            type="time"
            id="end"
            value={newEvent.end}
            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          />
        </div>
        <Textarea
          className="mb-4"
          placeholder="Event Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
        />
        <DialogFooter className="flex justify-end gap-4">
          <Button onClick={handleAddEvent}>Save</Button>
          <Button variant="secondary" onClick={() => setShowDialog(false)}>Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default EventDialog