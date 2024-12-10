import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

interface EventDetailsProps {
  event: {
    id: number;
    title: string;
    startDate?: Date;
    endDate?: Date;
    date?: Date;
    time: string;
    location: string;
    type: string;
    capacity: string;
    description: string;
    images: string[];
    isPast?: boolean;
  };
  onClose: () => void;
}

export function EventDetails({ event, onClose }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gray-900 rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white">{event.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {event.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Event ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-2" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2" />
              {event.time}
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="h-5 w-5 mr-2" />
              {event.location}
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="h-5 w-5 mr-2" />
              {event.capacity}
            </div>
          </div>

          <p className="text-gray-300 mb-6">{event.description}</p>

          {!event.isPast && (
            <Button 
              className="w-full"
              onClick={() => window.open('https://wikimediaworkshop.netlify.app', '_blank')}
            >
              Register Now
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}