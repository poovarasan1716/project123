import React from 'react';
import { assets, footer_data } from '../assets/assets';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 shadow-lg text-white w-full">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">College Events Portal</h3>
            <p className="text-gray-300 leading-relaxed">
              Your one-stop destination for all campus events and activities.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: 'https://coe.panimalar.ac.in/' },
                { label: 'Events Calendar', href: '#' },
                { label: 'Submit an Event', href: '#' },
                { label: 'Contact Us', href: '#' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Categories Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Event Categories</h4>
            <ul className="space-y-3">
              {['Academic', 'Cultural', 'Sports', 'Career'].map((category, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-5">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-300 hover:text-white text-xl transition-colors duration-200"
                  aria-label={social}
                >
                  <i className={`fab fa-${social}`} />
                </a>
              ))}
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-gray-300 flex items-center">
                <i className="fas fa-envelope mr-2" />
                events@college.edu
              </p>
              <p className="text-gray-300 flex items-center">
                <i className="fas fa-phone mr-2" />
                (123) 456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} College Events Portal. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Today's Date: {currentDate}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;