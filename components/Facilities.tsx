// components/Facilities.tsx
'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Facilities() {
  const facilities = [
  {
    name: 'Football Fields',
    description:
      'Professional turf with FIFA standard dimensions and floodlights for night matches.',
    icon: '⚽',
    color: 'from-green-500 to-emerald-600',
    stats: '3 Full-size Fields',
  },
  {
    name: 'Cricket Ground',
    description:
      'Full-size ground with turf wickets and practice nets for all skill levels.',
    icon: '🏏',
    color: 'from-blue-500 to-indigo-600',
    stats: '1 Stadium + 8 Nets',
  },
  {
    name: 'Pickle Ball Courts',
    description:
      'Dedicated pickleball courts designed for both casual and professional play with high-quality surfaces.',
    icon: '🥒',
    color: 'from-yellow-500 to-lime-600',
    stats: '4 Courts',
  },
  {
    name: 'Snooker Lounge',
    description:
      'Premium snooker and billiards lounge with professional tables and ambient lighting for tournaments.',
    icon: '🎱',
    color: 'from-purple-500 to-indigo-600',
    stats: '6 Tables',
  },
  {
    name: 'Volleyball Courts',
    description:
      'Beach and indoor volleyball courts with tournament-ready facilities.',
    icon: '🏐',
    color: 'from-pink-500 to-rose-600',
    stats: '3 Courts',
  },
];


  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-600 tracking-wide uppercase mb-3">
            Our Facilities
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            State-of-the-Art Sports Infrastructure
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of world-class sports facilities
            designed for athletes of all levels
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              {/* Icon Section */}
              <div
                className={`relative h-48 bg-gradient-to-br ${facility.color} flex items-center justify-center`}
              >
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {facility.name}
                  </h4>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {facility.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {facility.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/facilities"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
          >
            View All Facilities
            <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
