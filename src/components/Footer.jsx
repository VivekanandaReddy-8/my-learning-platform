import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                E
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Edu<span className="text-blue-500">Quest</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering learners worldwide with top-tier education, expert mentorship, and practical skill development.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@eduquest.io</li>
              <li>Phone: +1 (555) 234-5678</li>
              <li>Address: 456 Innovation Ave, Suite 300<br />San Francisco, CA 94107</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">f</span>
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">t</span>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">in</span>
              </a>
              <a href="#instagram" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <span className="font-bold text-sm">ig</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} EduQuest Learning Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}