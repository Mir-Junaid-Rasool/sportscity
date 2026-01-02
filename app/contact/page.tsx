"use client"
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Calendar, Users, Trophy, Sparkles } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facility: '',
    date: '',
    time: '',
    message: '',
  });

  const [status, setStatus] = useState({
    type: 'idle',
    message: '',
  });

  const facilities = [
    { name: 'Football', icon: '⚽', color: 'from-green-500 to-emerald-600' },
    { name: 'Box Cricket', icon: '🏏', color: 'from-blue-500 to-indigo-600' },
    { name: 'Cricket Nets', icon: '🎯', color: 'from-orange-500 to-red-600' },
    { name: 'Pickleball', icon: '🎾', color: 'from-yellow-500 to-orange-600' },
    { name: 'Badminton', icon: '🏸', color: 'from-pink-500 to-rose-600' },
    { name: 'Volleyball', icon: '🏐', color: 'from-purple-500 to-pink-600' },
  ];

  const timeSlots = [
    { time: '8:00 AM - 9:00 AM', available: false },
    { time: '9:00 AM - 10:00 AM', available: false },
    { time: '10:00 AM - 11:00 AM', available: true },
    { time: '11:00 AM - 12:00 PM', available: true },
    { time: '12:00 PM - 1:00 PM', available: true },
    { time: '1:00 PM - 2:00 PM', available: true },
    { time: '2:00 PM - 3:00 PM', available: true },
    { time: '3:00 PM - 4:00 PM', available: true },
    { time: '4:00 PM - 5:00 PM', available: true },
    { time: '5:00 PM - 6:00 PM', available: true },
    { time: '6:00 PM - 7:00 PM', available: true },
    { time: '7:00 PM - 8:00 PM', available: true },
    { time: '8:00 PM - 9:00 PM', available: true },
    { time: '9:00 PM - 10:00 PM', available: true },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.facility || !formData.date || !formData.time) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    setStatus({ type: 'loading', message: '' });

    try {
      const SHEETSDB_API = 'https://sheetdb.io/api/v1/zc4c5h0lynj9i';

      const response = await fetch(SHEETSDB_API, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            ...formData,
            status: 'Pending',
          },
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your booking request has been submitted successfully. We will contact you shortly.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          facility: '',
          date: '',
          time: '',
          message: '',
        });
        setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly.',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="animate-pulse" size={32} />
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                Book Your Slot
              </h1>
              <Sparkles className="animate-pulse" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light">
              Reserve your preferred sports facility in just a few clicks
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <Trophy className="mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-green-50">Facilities</div>
              </div>
              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <Users className="mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-green-50">Happy Players</div>
              </div>
              <div className="bg-black bg-opacity-10 backdrop-blur-sm rounded-xl p-4">
                <Calendar className="mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold">24hr</div>
                <div className="text-sm text-green-50">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-16 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Booking Form</h2>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    Full Name <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                      Email Address <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                      Phone Number <span className="text-red-500 ml-1">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900 placeholder-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Facility Selection with Icons */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
                    Select Facility <span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {facilities.map((facility) => (
                      <button
                        key={facility.name}
                        type="button"
                        onClick={() => setFormData({ ...formData, facility: facility.name })}
                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                          formData.facility === facility.name
                            ? `bg-gradient-to-br ${facility.color} text-white border-transparent shadow-lg scale-105`
                            : 'border-gray-200 hover:border-green-300 hover:shadow-md bg-white'
                        }`}
                      >
                        <div className="text-3xl mb-1">{facility.icon}</div>
                        <div className={`text-xs font-semibold ${
                          formData.facility === facility.name ? 'text-white' : 'text-gray-700'
                        }`}>
                          {facility.name}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date & Time Slots */}
                <div>
                  <label htmlFor="date" className="block text-sm font-bold text-gray-700 mb-2 flex items-center">
                    Preferred Date <span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-gray-900"
                  />
                </div>

                {/* Time Slot Selection */}
<div>
  <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center">
    Select Slot <span className="text-red-500 ml-1">*</span>
  </label>

  <div className="bg-slate-900 text-white rounded-2xl p-6">
    <h4 className="text-lg font-bold mb-4">Select Slot:</h4>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {timeSlots.map((slot) => (
        <button
          key={slot.time}
          type="button"
          onClick={() => setFormData({ ...formData, time: slot.time })}
          className={`p-4 rounded-xl border-3 font-semibold text-sm transition-all
            ${
              formData.time === slot.time
                ? 'bg-green-500 text-white border-green-600 shadow-lg scale-105'
                : 'bg-slate-100 text-slate-900 border-slate-300 hover:bg-slate-200 hover:scale-105'
            }
          `}
        >
          {slot.time}
        </button>
      ))}
    </div>
  </div>
</div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none text-gray-900 placeholder-gray-400"
                    placeholder="Tell us about any special requirements or questions..."
                  />
                </div>

                {/* Status Messages */}
                {status.type === 'success' && (
                  <div className="flex items-start space-x-3 bg-green-50 border-2 border-green-200 rounded-xl p-5 animate-pulse">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={24} />
                    <p className="text-green-800 font-medium">{status.message}</p>
                  </div>
                )}
                {status.type === 'error' && (
                  <div className="flex items-start space-x-3 bg-red-50 border-2 border-red-200 rounded-xl p-5">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={24} />
                    <p className="text-red-800 font-medium">{status.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status.type === 'loading'}
                  className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-5 rounded-xl font-bold text-lg hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transform hover:scale-[1.02] transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {status.type === 'loading' ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3" size={22} />
                      Submit Booking Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Phone className="mr-3 text-green-600" size={24} />
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Malla Bagh, Srinagar<br />Jammu & Kashmir 190006
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm">+91 9796575590</p>
                    <p className="text-gray-600 text-sm">+91 9796575590</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Mail className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600 text-sm break-all">mirshahu@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-600 text-sm font-semibold">Monday - Sunday</p>
                    <p className="text-gray-600 text-sm">6:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="mr-3 text-green-600" size={24} />
                Find Us
              </h3>
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-inner">
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
              <div className="mt-4 text-center">
                <a
                  href="https://www.google.com/maps?q=34.1501045227051,74.8290710449219"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MapPin className="mr-2" size={18} />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}