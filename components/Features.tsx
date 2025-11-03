// components/Features.tsx
'use client'
import { Trophy, Users, Clock, Shield, Star, Zap } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Trophy,
      title: 'World-Class Facilities',
      description: 'International standard sports infrastructure with modern amenities and equipment.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Users,
      title: 'Expert Coaching',
      description: 'Learn from certified professionals with years of experience in their respective sports.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Book slots that fit your schedule with our easy online booking system available 24/7.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Well-maintained facilities with regular safety inspections and first-aid support.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Star,
      title: 'Premium Membership',
      description: 'Exclusive benefits, priority booking, and special discounts for our valued members.',
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Zap,
      title: 'Modern Equipment',
      description: 'Latest sports gear and equipment regularly updated to meet international standards.',
      color: 'from-cyan-400 to-teal-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-600 tracking-wide uppercase mb-3">
            Why Choose Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Excellence in Every Detail
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to pursue your passion for sports in a professional environment
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400/0 via-green-400/0 to-green-400/0 group-hover:from-green-400/5 group-hover:via-green-400/10 group-hover:to-green-400/5 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}