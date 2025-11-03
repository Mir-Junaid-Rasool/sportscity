// components/Footer.tsx
"use client"
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Membership', href: '/membership' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
  ];

  const facilities = [
    { name: 'Football Fields', href: '/facilities/football' },
    { name: 'Tennis Courts', href: '/facilities/tennis' },
    { name: 'Basketball Courts', href: '/facilities/basketball' },
    { name: 'Cricket Ground', href: '/facilities/cricket' },
    { name: 'Swimming Pool', href: '/facilities/swimming' },
    { name: 'Volleyball Courts', href: '/facilities/volleyball' },
  ];

  const support = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cancellation Policy', href: '/cancellation' },
    { name: 'Career', href: '/career' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
               <div className="relative w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <Image
                  src="/logo.jpg"
                  alt="Mir Sports City Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Sports City</h3>
                <p className="text-sm text-green-400">Malla Bagh, Srinagar</p>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Kashmir's premier sports complex offering world-class facilities for all your sporting needs. 
              From beginners to professionals, we welcome everyone to pursue their passion.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="text-sm">Malla Bagh, Srinagar, Jammu & Kashmir 190001</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+91 9796575590</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">mirshahu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-green-400 transition-colors">
                <Clock size={18} className="flex-shrink-0" />
                <span className="text-sm">Mon-Sun: 6:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Our Facilities</h4>
            <ul className="space-y-3">
              {facilities.map((facility) => (
                <li key={facility.name}>
                  <Link
                    href={facility.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {facility.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-2xl">
            <h4 className="text-white font-bold text-xl mb-3">Stay Updated</h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for latest updates, offers, and sports events.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors"
              />
              <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-full font-semibold hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors group"
            >
              <Facebook size={18} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors group"
            >
              <Instagram size={18} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors group"
            >
              <Twitter size={18} className="text-gray-400 group-hover:text-white" />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors group"
            >
              <Youtube size={18} className="text-gray-400 group-hover:text-white" />
            </Link>
          </div>

          {/* Copyright */}
         <p className="text-gray-500 text-sm text-center md:text-right">
  © {currentYear} Mir Sports City. All rights reserved. Made with ❤️ by{' '}
  <a
    href="https://mirjunaid.netlify.app"
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-600 font-semibold hover:underline"
  >
    Mir Junaid
  </a>
</p>

        </div>
      </div>
    </footer>
  );
}