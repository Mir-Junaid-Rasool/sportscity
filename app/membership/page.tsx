// app/membership/page.tsx
'use client';

import { Crown, Check, Zap, Star, Calendar, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function MembershipPage() {
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      icon: '🥉',
      gradient: 'from-gray-500 to-gray-600',
      price: '₹2,999',
      duration: 'per month',
      description: 'Perfect for getting started with your fitness journey',
      features: [
        'Access to all facilities',
        '5 days per week',
        'Basic equipment access',
        'Locker facility',
        'Online booking'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      icon: '🥇',
      gradient: 'from-yellow-500 to-orange-600',
      price: '₹4,999',
      duration: 'per month',
      description: 'Most popular choice for serious athletes',
      features: [
        'Unlimited facility access',
        '7 days per week',
        'All equipment & courts',
        'Free group sessions',
        'Locker facility',
        '2 guest passes/month',
        'Priority booking'
      ],
      popular: true
    },
    {
      id: 'elite',
      name: 'Elite',
      icon: '💎',
      gradient: 'from-purple-500 to-pink-600',
      price: '₹7,999',
      duration: 'per month',
      description: 'Ultimate experience with exclusive benefits',
      features: [
        'Everything in Premium',
        'Personal training (4 sessions)',
        'Diet consultation',
        'Exclusive events access',
        'Dedicated locker',
        '5 guest passes/month',
        'Free sports merchandise'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Crown className="text-yellow-400 mx-auto mb-6 animate-bounce" size={64} />
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-transparent bg-clip-text">
              Membership Plans
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
              Choose the perfect plan for your fitness goals
            </p>
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-yellow-400 ring-2 ring-yellow-400/50' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-center py-2 font-bold text-sm">
                    ⭐ MOST POPULAR
                  </div>
                )}

                {/* Card Header */}
                <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                      {plan.icon}
                    </div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/90 text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-8 text-center border-b border-white/10">
                  <div className="text-5xl font-extrabold text-white mb-2">
                    {plan.price}
                  </div>
                  <div className="text-gray-400 text-sm">{plan.duration}</div>
                </div>

                {/* Features */}
                <div className="p-8 text-white">
                  <div className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-200">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Join Button */}
                  <Link href="/contact">
                    <button className={`w-full mt-8 bg-gradient-to-r ${plan.gradient} text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all`}>
                      Join Now
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white text-center mb-12">
            Membership Benefits
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-white text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-lg font-bold mb-2">Flexible Access</h3>
              <p className="text-gray-300 text-sm">Book anytime through our app</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-white text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-orange-400" />
              <h3 className="text-lg font-bold mb-2">Premium Facilities</h3>
              <p className="text-gray-300 text-sm">Access to all sports venues</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-white text-center">
              <Star className="w-12 h-12 mx-auto mb-4 text-pink-400" />
              <h3 className="text-lg font-bold mb-2">Expert Support</h3>
              <p className="text-gray-300 text-sm">Guidance from trained staff</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 text-white text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <h3 className="text-lg font-bold mb-2">No Lock-in</h3>
              <p className="text-gray-300 text-sm">Cancel anytime, no questions</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-600/30 via-orange-600/30 to-pink-600/30 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
            <Trophy className="mx-auto mb-6 text-yellow-400" size={56} />
            <h2 className="text-4xl font-extrabold text-white mb-6">
              Ready to Begin?
            </h2>
            <p className="text-xl text-gray-200 mb-10">
              Choose your plan and start your transformation today
            </p>
            <Link href="/contact">
              <button className="group inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300">
                <Crown className="mr-3" size={24} />
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
