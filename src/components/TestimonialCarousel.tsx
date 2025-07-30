'use client';

import React, { useState, useEffect, useCallback } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "From start to finish, THTGR exceeded my expectations. Their team was attentive, helpful, and genuinely cared about my success",
    author: "Oliver",
    role: "Head Chef"
  },
  {
    id: 2,
    quote: "The best recruitment agency I've worked with. They understood exactly what our restaurant needed and found the perfect candidates",
    author: "Sarah",
    role: "Restaurant Owner"
  },
  {
    id: 3,
    quote: "Their industry knowledge and professional approach made my job search seamless. I found my dream role within weeks",
    author: "James",
    role: "Sous Chef"
  },
  {
    id: 4,
    quote: "THTGR's commitment to matching the right talent with the right opportunity is unmatched in the industry",
    author: "Emma",
    role: "F&B Director"
  },
  {
    id: 5,
    quote: "They don't just fill positions, they build careers. Their guidance was invaluable in my professional journey",
    author: "Michael",
    role: "Executive Chef"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startInterval = useCallback(() => {
    return setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300);
    }, 10000);
  }, []);

  useEffect(() => {
    const timer = startInterval();
    return () => clearInterval(timer);
  }, [startInterval]);

  const handleChange = (newIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
    
    // Reset the interval
    const timer = startInterval();
    return () => clearInterval(timer);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    handleChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    handleChange(newIndex);
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <blockquote className={`text-lg text-center italic mb-6 min-h-[80px] transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          &ldquo;{testimonials[currentIndex].quote}&rdquo;
        </blockquote>
        <div className={`text-center space-y-1 transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-text-secondary">{testimonials[currentIndex].author}</p>
          <p className="text-text-secondary font-bold">{testimonials[currentIndex].role}</p>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Previous testimonial"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
        aria-label="Next testimonial"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-primary" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleChange(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-primary w-4' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 
