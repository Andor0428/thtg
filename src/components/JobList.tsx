'use client';

import React from 'react';
import Link from 'next/link';

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: 'Head Chef',
    location: 'London',
    type: 'Full-time',
    salary: '£45,000 - £55,000',
    company: 'Luxury Hotel Group',
    description: 'Experienced Head Chef needed for a prestigious hotel in central London...',
  },
  {
    id: 2,
    title: 'Restaurant Manager',
    location: 'Manchester',
    type: 'Full-time',
    salary: '£35,000 - £40,000',
    company: 'Fine Dining Restaurant',
    description: 'Seeking an experienced Restaurant Manager to lead our front-of-house team...',
  },
  {
    id: 3,
    title: 'Sous Chef',
    location: 'Birmingham',
    type: 'Full-time',
    salary: '£32,000 - £38,000',
    company: 'Boutique Restaurant',
    description: 'Join our kitchen team as a Sous Chef in our award-winning restaurant...',
  },
  {
    id: 4,
    title: 'Pastry Chef',
    location: 'Edinburgh',
    type: 'Full-time',
    salary: '£28,000 - £35,000',
    company: 'Luxury Patisserie',
    description: 'Creative Pastry Chef needed for high-end patisserie, creating exceptional desserts...',
  },
  {
    id: 5,
    title: 'Food & Beverage Director',
    location: 'London',
    type: 'Full-time',
    salary: '£55,000 - £65,000',
    company: 'International Hotel Chain',
    description: 'Experienced F&B Director to oversee multiple outlets in a 5-star hotel...',
  },
  {
    id: 6,
    title: 'Sommelier',
    location: 'Cambridge',
    type: 'Full-time',
    salary: '£30,000 - £38,000',
    company: 'Fine Wine Restaurant',
    description: 'Expert Sommelier needed for fine dining establishment with extensive wine collection...',
  },
  {
    id: 7,
    title: 'Executive Chef',
    location: 'Glasgow',
    type: 'Full-time',
    salary: '£50,000 - £60,000',
    company: 'Luxury Resort',
    description: 'Executive Chef to lead culinary operations at prestigious Scottish resort...',
  },
];

export default function JobList() {
  return (
    <div className="max-h-[800px] overflow-y-auto pr-4 -mr-4">
      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-text-secondary">{job.company}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href={`/jobs/${job.id}`}
                  className="btn-primary bg-[#2ab0b4] hover:bg-[#2ab0b4]/90 text-white px-4 py-2 rounded-md inline-block"
                >
                  Apply Now
                </Link>
              </div>
            </div>
            
            <p className="text-text-secondary mb-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-[#2ab0b4]/10 text-[#2ab0b4] px-3 py-1 rounded-full">
                {job.type}
              </span>
              <span className="bg-gray-100 text-text-secondary px-3 py-1 rounded-full">
                {job.location}
              </span>
              <span className="bg-gray-100 text-text-secondary px-3 py-1 rounded-full">
                {job.salary}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
