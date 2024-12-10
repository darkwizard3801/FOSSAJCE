import React from 'react';
import { motion } from 'framer-motion';
import { Github2 as Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Mathews Mathukutty',
    role: 'Club President',
    image: 'https://avatars.githubusercontent.com/u/86302350?v=4',
    github: 'https://github.com/MatthewsM2',
    linkedin: 'https://www.linkedin.com',
    email: 'mathewsmathukutty2025@mca.ajce.in',
  },
  {
    name: 'Akhil Augustine',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    github: '',
    linkedin: '#',
    email: 'akhilaugustine2025@mca.ajce.in',
  },
  {
    name: 'Binumon Joseph',
    role: 'Event Coordinator',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    github: '',
    linkedin: '#',
    email: 'emily@example.com',
  },
  {
    name: 'Yadu Krishna',
    role: 'Development Lead',
    image: 'https://res.cloudinary.com/du8ogkcns/image/upload/v1733817731/D_73899m_ic7jjg.jpg',
    github: 'https://github.com/yaduk2001',
    linkedin: 'https://www.linkedin.com/in/yadu-krishna-ks-478393193',
    email: 'yadukrishna2025@mca.ajce.in',
  },
  {
    name: 'Kamal sankar M',
    role: 'Development Lead',
    image: 'https://res.cloudinary.com/du8ogkcns/image/upload/v1733817684/photo_2024-12-10_13-27-46_p9tbym.jpg',
    github: 'https://github.com/SantaKoska',
    linkedin: 'https://www.linkedin.com/in/kamal-sankar-m-918946214/',
    email: 'kaamlsankarm2025@mca.ajce.in',
  },
  {
    name: 'Alen Siby',
    role: 'Technical Lead ',
    image: 'https://res.cloudinary.com/du8ogkcns/image/upload/v1733817747/passport_photo_fvgjtg.jpg',
    github: 'https://github.com/darkwizard3801',
    linkedin: 'www.linkedin.com/in/alen-siby',
    email: 'alensiby2025@mca.ajce.in',
  },
];

export function Team() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Meet Our Team</h1>
          <p className="text-xl text-gray-300">
            The passionate individuals behind the FOSS Club.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}