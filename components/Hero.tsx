// components/Hero.tsx
'use client';

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Premium Sports Facilities in Srinagar</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Where Champions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                Are Made
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl">
              Experience world-class sports facilities at Sports City. From football to tennis, 
              cricket to basketball - we have everything you need to excel in your sport.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="group bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Book Your Slot
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button
                onClick={() => setVideoOpen(true)}
                className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-green-600 transform hover:scale-105 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
              >
                <Play className="mr-2 fill-current" size={20} />
                Virtual Tour
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-600">Sports Facilities</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600">5000+</div>
                <div className="text-sm text-gray-600">Active Members</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-sm text-gray-600">Expert Coaches</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative lg:h-[600px] grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">⚽</div>
              </div>
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl transform hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">🎾</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">🏀</div>
              </div>
              <div className="h-48 bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl shadow-xl transform hover:scale-105 transition-transform overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">🏐</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}