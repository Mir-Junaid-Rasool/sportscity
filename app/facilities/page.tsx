// app/facilities/page.tsx
'use client';

import { useState } from 'react';
import { Trophy, Users, Clock, Star, MapPin, Calendar, Zap, Shield, Target } from 'lucide-react';
import Link from 'next/link';

export default function FacilitiesPage() {
  const [activeVideo, setActiveVideo] = useState<'football' | 'cricket'>('football');

  const facilities = [
    {
      id: 'football',
      name: 'Football',
      icon: '⚽',
      gradient: 'from-green-500 to-emerald-600',
      video: 'football',
      description: 'FIFA standard full-size field with premium artificial turf',
      features: ['100x60m Field', '11v11 Capacity', 'Floodlights', 'Changing Rooms'],

    },
    {
      id: 'box-cricket',
      name: 'Box Cricket',
      icon: '🏏',
      gradient: 'from-blue-500 to-indigo-600',
      video: 'cricket',
      description: 'Indoor cricket arena with professional setup and equipment',
      features: ['40x20m Arena', '6v6 Format', 'Net Protection', 'Quality Bats & Balls'],
      
    },
    {
      id: 'cricket-nets',
      name: 'Cricket Nets',
      icon: '🎯',
      gradient: 'from-orange-500 to-red-600',
      video: 'cricket',
      description: 'Professional practice nets for batting and bowling training',
      features: ['4 Net Lanes', 'Bowling Machine', 'Coaching Available', 'Video Analysis'],
  
    },
    {
      id: 'pickleball',
      name: 'Pickleball',
      icon: '🎾',
      gradient: 'from-yellow-500 to-orange-600',
      video: 'football',
      description: 'Modern pickleball courts with quality equipment',
      features: ['Standard Courts', 'Paddles Provided', 'Outdoor Setup', 'Coaching Available'],
     
    },
    {
      id: 'badminton',
      name: 'Badminton',
      icon: '🏸',
      gradient: 'from-pink-500 to-rose-600',
      video: 'football',
      description: 'Indoor badminton courts with wooden flooring',
      features: ['4 Courts', 'Quality Rackets', 'Shuttlecocks', 'Air Conditioned'],
      
    },
    {
      id: 'volleyball',
      name: 'Volleyball',
      icon: '🏐',
      gradient: 'from-purple-500 to-pink-600',
      video: 'football',
      description: 'Outdoor volleyball court with sand surface',
      features: ['Standard Court', 'Net Provided', 'Beach Setup', 'Tournament Ready'],
      
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        {/* Football Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto min-w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 'football' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/football1.mp4" type="video/mp4" />
        </video>

        {/* Cricket Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-auto min-w-full object-cover transition-opacity duration-1000 ${
            activeVideo === 'cricket' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/cricket.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-white pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center space-x-4 mb-8">
                <Trophy className="text-yellow-400 animate-bounce" size={64} />
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
                Our Facilities
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
                World-class sports facilities for every athlete
              </p>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={facility.id}
                  onMouseEnter={() => setActiveVideo(facility.video as 'football' | 'cricket')}
                  className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-br ${facility.gradient} p-8 text-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                    <div className="relative z-10">
                      <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                        {facility.icon}
                      </div>
                      <h3 className="text-3xl font-extrabold text-white">{facility.name}</h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 text-white">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {facility.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Star className="text-yellow-400 flex-shrink-0" size={18} />
                          <span className="text-sm text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Book Button */}
                    <Link href="/contact">
                      <button className={`w-full bg-gradient-to-r ${facility.gradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all`}>
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gradient-to-b from-transparent via-black/50 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300">Everything you need for the perfect sports experience</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Professional Grade</h3>
                <p className="text-gray-300">Top-quality equipment and facilities</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Expert Coaching</h3>
                <p className="text-gray-300">Trained coaches available for all sports</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Flexible Timing</h3>
                <p className="text-gray-300">Open 6 AM to 10 PM daily</p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center transform hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Modern Amenities</h3>
                <p className="text-gray-300">Changing rooms, showers, and more</p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                  Visit Us Today
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Located in the heart of Srinagar, our sports complex is easily accessible and offers world-class facilities for all your sporting needs.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <MapPin className="text-green-400 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Address</h3>
                      <p className="text-gray-300">Malla Bagh, Srinagar<br />Jammu & Kashmir 190006</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                    <Clock className="text-blue-400 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Operating Hours</h3>
                      <p className="text-gray-300">Monday - Sunday<br />6:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20">
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps?q=34.1501045227051,74.8290710449219&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sports City Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-green-600/30 via-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
              <Calendar className="mx-auto mb-6 text-yellow-400" size={64} />
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-200 mb-10">
                Book your preferred facility now and experience world-class sports infrastructure
              </p>
              <Link href="/contact">
                <button className="group relative inline-flex items-center justify-center px-16 py-6 text-2xl font-bold text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Calendar className="mr-3 relative z-10" size={28} />
                  <span className="relative z-10">Book Now</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}