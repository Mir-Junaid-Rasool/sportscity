// components/CTA.tsx
import Link from 'next/link';
import { ArrowRight, Calendar, Gift } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Circles */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Gift className="w-4 h-4" />
            <span>Limited Time Offer</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your
            <span className="block">Sports Journey?</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-green-100 mb-12 max-w-3xl mx-auto">
            Join Mir Sports City today and get 20% off on your first membership. 
            Experience world-class facilities and expert coaching!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/membership"
              className="group bg-white text-green-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all shadow-2xl hover:shadow-3xl flex items-center"
            >
              Become a Member
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link
              href="/contact"
              className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transform hover:scale-105 transition-all flex items-center"
            >
              <Calendar className="mr-2" size={20} />
              Book a Facility
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100 text-sm">Online Booking</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-green-100 text-sm">Secure Payments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Free</div>
              <div className="text-green-100 text-sm">Trial Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">ISO</div>
              <div className="text-green-100 text-sm">Certified Facilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}