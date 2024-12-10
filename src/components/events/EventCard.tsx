import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';

interface EventCardProps {
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
  images?: string[];
  isPast?: boolean;
  onViewDetails: (id: number) => void;
}

export function EventCard({
  id,
  title,
  startDate,
  endDate,
  date,
  time,
  location,
  type,
  capacity,
  description,
  images,
  isPast,
  onViewDetails,
}: EventCardProps) {
  const formatDateRange = () => {
    if (startDate && endDate) {
      return `${formatDate(startDate)} - ${formatDate(endDate)}`;
    }
    return formatDate(date!);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto ${
        isPast ? 'opacity-60' : ''
      }`}
    >
      <div className="h-48 w-full">
        <img
          src={images?.[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-gray-300 mb-3">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {formatDateRange()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {location}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {capacity}
              </div>
            </div>
            <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
          </div>
          
          <div className="flex justify-end">
            {isPast ? (
              <Button
                size="sm"
                onClick={() => onViewDetails(id)}
              >
                View Event
              </Button>
            ) : (
              <a href="https://wikimediaworkshop.netlify.app">
                <Button size="sm">
                  View Details
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}