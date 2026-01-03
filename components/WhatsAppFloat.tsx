// components/WhatsAppFloat.tsx
'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Replace with your actual WhatsApp number (include country code without + or spaces)
  const phoneNumber = '919796575590'; // Format: 919419012345 for +91 94190 12345
  const message = 'Hi! I would like to inquire about Sports City facilities.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const closeTooltip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTooltip(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip */}
        {showTooltip && (
          <div className="hidden md:flex items-center bg-white rounded-lg shadow-2xl px-4 py-3 animate-in fade-in slide-in-from-right-2">
            <div className="mr-3">
              <p className="text-sm font-semibold text-gray-900">Need Help?</p>
              <p className="text-xs text-gray-600">Chat with us on WhatsApp</p>
            </div>
            <button
              onClick={closeTooltip}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close tooltip"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none"
          aria-label="Chat on WhatsApp"
        >
          {/* Ripple Effect */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          
          {/* Icon */}
          <div className="relative">
            <MessageCircle 
              size={28} 
              className="fill-current transform group-hover:rotate-12 transition-transform"
            />
          </div>

          {/* Mobile Tooltip */}
          {isHovered && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Chat with us
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </button>
      </div>

      {/* Pulsing Ring Animation */}
      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes slide-in-from-right-2 {
          from {
            transform: translateX(10px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}