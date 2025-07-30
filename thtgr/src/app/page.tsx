'use client';

import { useState } from 'react';
import Link from 'next/link';
import JobList from '@/components/JobList';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ApplicationForm from '@/components/ApplicationForm';

export default function Home() {
  const [isApplicationFormOpen, setIsApplicationFormOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#2ab0b4] text-white py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold mb-6">
              Your Premier Partner for Specialised Recruitment
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              London&apos;s Leading Recruitment Agency, Dedicated to Candidates First
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/jobs" className="btn-primary bg-white hover:bg-white/90 text-[#2ab0b4]">
                View Jobs
              </Link>
              <button 
                onClick={() => setIsApplicationFormOpen(true)}
                className="btn-primary bg-[#2ab0b4] hover:bg-[#2ab0b4]/90 text-white border-2 border-white"
              >
                Send Application
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Partners Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-2xl font-sans font-bold text-center mb-8 text-[#2ab0b4]">Our Partners</h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll whitespace-nowrap">
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">Hilton</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">Marriott</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">The Ritz</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">The Savoy</div>
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">Hilton</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">Marriott</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">The Ritz</div>
              </div>
              <div className="flex-none w-28 h-14 bg-white rounded-lg shadow-md flex items-center justify-center p-3 border border-[#2ab0b4]/20">
                <div className="font-bold text-[#2ab0b4]">The Savoy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-sans font-bold text-center mb-12 text-[#2ab0b4]">Testimonials</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-sans font-bold mb-6 text-[#2ab0b4]">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              We are proud to connect talented individuals from across the UK with exceptional opportunities in the hospitality industry. Our dedicated team is here to help you find the perfect role that matches your skills and passion. Join us as we raise the standards of hospitality together!
            </p>
            <Link href="/about" className="btn-primary bg-[#2ab0b4] hover:bg-[#2ab0b4]/90 text-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-sans font-bold text-center mb-12 text-[#2ab0b4]">Available Positions</h2>
          <JobList />
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setIsApplicationFormOpen(true)}
              className="btn-primary bg-[#2ab0b4] hover:bg-[#2ab0b4]/90 text-white"
            >
              Apply
            </button>
            <button
              onClick={() => setIsApplicationFormOpen(true)}
              className="btn-primary bg-white hover:bg-white/90 text-[#2ab0b4] border-2 border-[#2ab0b4]"
            >
              Send Your Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <ApplicationForm 
        isOpen={isApplicationFormOpen}
        onClose={() => setIsApplicationFormOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold text-[#2ab0b4] mb-4">About Us</h3>
              <p className="text-gray-600 mb-4">
                Connecting top talent with leading hospitality businesses throughout the UK.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#2ab0b4] hover:text-[#2ab0b4]/80">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#2ab0b4] hover:text-[#2ab0b4]/80">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#2ab0b4] hover:text-[#2ab0b4]/80">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#2ab0b4] hover:text-[#2ab0b4]/80">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </Link>
                <Link href="#" className="text-[#2ab0b4] hover:text-[#2ab0b4]/80">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-[#2ab0b4] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/jobs" className="text-gray-600 hover:text-[#2ab0b4]">Browse Positions</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-[#2ab0b4]">About Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-[#2ab0b4]">Contact</Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-[#2ab0b4]">Privacy Policy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-[#2ab0b4] mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>London, UK</li>
                <li>Tel: +44 20 1234 5678</li>
                <li>enquiries@hospitalityrecruiter.uk</li>
                <li>Mon - Fri: 09:00 - 18:00</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold text-[#2ab0b4] mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest positions and industry news.</p>
              <form className="space-y-2">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2ab0b4]"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#2ab0b4] text-white px-4 py-1 rounded-md hover:bg-[#2ab0b4]/90 text-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600 text-sm">
              © {new Date().getFullYear()} Hospitality Recruiter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
