// app/coaching/page.tsx
'use client';
import { Award, Users, Clock, CheckCircle, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function CoachingPage() {
  const programs = [
    {
      id: 'football',
      name: 'Football Coaching',
      icon: '⚽',
      gradient: 'from-green-500 to-emerald-600',
      description: 'Professional football training for all skill levels',
      features: ['Technical Skills', 'Tactical Training', 'Match Analysis', 'Fitness Sessions'],
      levels: ['Beginner', 'Intermediate', 'Advanced']
    },
    {
      id: 'cricket',
      name: 'Cricket Academy',
      icon: '🏏',
      gradient: 'from-blue-500 to-indigo-600',
      description: 'Comprehensive cricket coaching from basics to advanced',
      features: ['Batting Technique', 'Bowling Skills', 'Fielding Drills', 'Mental Training'],
      levels: ['Junior', 'Senior', 'Professional']
    },
    {
      id: 'badminton',
      name: 'Badminton Training',
      icon: '🏸',
      gradient: 'from-pink-500 to-rose-600',
      description: 'Expert badminton coaching with personalized attention',
      features: ['Footwork Training', 'Stroke Practice', 'Court Strategies', 'Endurance Building'],
      levels: ['Kids', 'Adults', 'Competition']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="text-yellow-400 mx-auto mb-6 animate-bounce" size={64} />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Professional Coaching
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Train with certified coaches and unlock your true potential
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.id}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${program.gradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                      {program.icon}
                    </div>
                    <h3 className="text-3xl font-extrabold text-white">{program.name}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 text-white">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                        <span className="text-sm text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Levels */}
                  <div className="border-t border-white/20 pt-6 mb-6">
                    <h4 className="text-sm font-bold mb-3 text-gray-400 uppercase">Available Levels</h4>
                    <div className="flex flex-wrap gap-2">
                      {program.levels.map((level, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Enquire Button */}
                  <Link href="/contact">
                    <button className={`w-full bg-gradient-to-r ${program.gradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all`}>
                      Enquire Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Why Train With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <h3 className="text-xl font-bold mb-3">Expert Coaches</h3>
              <p className="text-gray-300">Certified professionals with years of experience</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-xl font-bold mb-3">Flexible Timings</h3>
              <p className="text-gray-300">Morning and evening batches available</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-white text-center">
              <Award className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-300">Track record of successful athletes</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600/30 via-blue-600/30 to-purple-600/30 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <Calendar className="mx-auto mb-6 text-yellow-400" size={56} />
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Start Your Journey Today
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Join our coaching programs and take your game to the next level
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300">
                <Calendar className="mr-3" size={24} />
                <span>Contact Us</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
