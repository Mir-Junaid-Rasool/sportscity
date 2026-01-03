// components/Testimonials.tsx
'use client';

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Arjun Sharma',
      role: 'Professional Cricketer',
      image: '🏏',
      rating: 5,
      text: 'Sports City has the best cricket facilities in Kashmir. The practice nets and coaching staff helped me improve my game significantly. Highly recommended for serious athletes!',
    },
    {
      name: 'Priya Malik',
      role: 'Tennis Enthusiast',
      image: '🎾',
      rating: 5,
      text: 'The tennis courts are world-class! Perfect surface, excellent lighting, and the booking system is so convenient. I practice here every weekend and love the community vibe.',
    },
    {
      name: 'Rahul Kumar',
      role: 'Football Coach',
      image: '⚽',
      rating: 5,
      text: 'As a coach, I appreciate the quality of facilities here. The football fields are well-maintained, and the management is very professional. My students love training here!',
    },
    {
      name: 'Ayesha Khan',
      role: 'Fitness Trainer',
      image: '💪',
      rating: 5,
      text: 'The gym and swimming pool facilities are outstanding. Everything is clean, modern, and the staff is incredibly helpful. Best sports complex in Srinagar without a doubt!',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-600 tracking-wide uppercase mb-3">
            Testimonials
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied athletes and sports enthusiasts
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-green-200">
              <Quote size={60} fill="currentColor" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-4xl shadow-lg transform hover:scale-110 transition-transform">
                  {testimonials[activeIndex].image}
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className="text-yellow-400 fill-current mx-0.5"
                  />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed font-medium">
                "{testimonials[activeIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <p className="text-lg font-bold text-gray-900">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-green-600 font-medium">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-green-600'
                    : 'w-3 h-3 bg-gray-300 hover:bg-green-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1200+</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}