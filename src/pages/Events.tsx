import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EventCard } from '@/components/events/EventCard';
import { EventDetails } from '@/components/events/EventDetails';

const events = [
  {
    id: 2,
    title: 'Wikimedia Technical Workshop',
    startDate: new Date('2024-12-12'),
    endDate: new Date('2024-12-13'),
    time: '9:00 AM - 4:30 PM',
    location: 'Main Campus',
    type: 'Hackathon/Workshop',
    capacity: '30 participants',
    description: 'A two-day workshop focused on Wikimedia And its Usage and Debugging.',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
      'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800'
    ]
  },
  {
    id: 1,
    title: 'Introduction to Open Source',
    date: new Date('2024-03-15'),
    time: '2:00 PM - 4:00 PM',
    location: 'Virtual',
    type: 'Workshop',
    capacity: '50 participants',
    description: 'Learn the basics of open source contribution and how to get started with your first pull request.',
    images: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800'
    ]
  },
  {
    id: 3,
    title: 'Linux Installation Workshop',
    date: new Date('2024-02-01'),
    time: '3:00 PM - 5:00 PM',
    location: 'Lab 101',
    type: 'Workshop',
    capacity: '30 participants',
    description: 'Past event: Hands-on workshop for installing and configuring Linux distributions.',
    images: [
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800',
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800'
    ],
    isPast: true
  }
];

export function Events() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Events</h1>
          <p className="text-xl text-gray-300">
            Join us for workshops, hackathons, and meetups to learn and grow together.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onViewDetails={setSelectedEvent}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedEvent !== null && (
            <EventDetails
              event={events.find(e => e.id === selectedEvent)!}
              onClose={() => setSelectedEvent(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}