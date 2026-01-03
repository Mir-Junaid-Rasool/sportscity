// app/gallery/page.tsx
'use client';

import { useState } from 'react';
import { Play, X, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState<{ type: 'image' | 'video'; src: string } | null>(null);

  const categories = ['All', 'Football', 'Box Cricket', 'Cricket Nets', 'Pickleball', 'Badminton', 'Volleyball', 'Events'];

  // Gallery items - Add your images and videos here
  const galleryItems = [
    // Football
    { type: 'image', src: '/gallery/football/football-1.jpg', category: 'Football', alt: 'Football Match' },
    { type: 'image', src: '/gallery/football/football-2.jpg', category: 'Football', alt: 'Football Training' },
    { type: 'image', src: '/gallery/football/football-3.jpg', category: 'Football', alt: 'Football Field' },
    { type: 'video', src: '/gallery/football/football-video-1.mp4', category: 'Football', alt: 'Football Game Highlights' },
    { type: 'video', src: '/gallery/football/football-video-2.mp4', category: 'Football', alt: 'Football Practice' },
    
    // Box Cricket
    { type: 'image', src: '/gallery/box-cricket/box-cricket-1.jpg', category: 'Box Cricket', alt: 'Box Cricket Match' },
    { type: 'image', src: '/gallery/box-cricket/box-cricket-2.jpg', category: 'Box Cricket', alt: 'Box Cricket Arena' },
    { type: 'image', src: '/gallery/box-cricket/box-cricket-3.jpg', category: 'Box Cricket', alt: 'Box Cricket Team' },
    { type: 'video', src: '/gallery/box-cricket/box-cricket-video-1.mp4', category: 'Box Cricket', alt: 'Box Cricket Highlights' },
    
    // Cricket Nets
    { type: 'image', src: '/gallery/cricket-nets/cricket-nets-1.jpg', category: 'Cricket Nets', alt: 'Cricket Practice' },
    { type: 'image', src: '/gallery/cricket-nets/cricket-nets-2.jpg', category: 'Cricket Nets', alt: 'Batting Practice' },
    { type: 'image', src: '/gallery/cricket-nets/cricket-nets-3.jpg', category: 'Cricket Nets', alt: 'Bowling Practice' },
    { type: 'video', src: '/gallery/cricket-nets/cricket-nets-video-1.mp4', category: 'Cricket Nets', alt: 'Cricket Training' },
    
    // Pickleball
    { type: 'image', src: '/gallery/pickleball/pickleball-1.jpg', category: 'Pickleball', alt: 'Pickleball Match' },
    { type: 'image', src: '/gallery/pickleball/pickleball-2.jpg', category: 'Pickleball', alt: 'Pickleball Court' },
    { type: 'image', src: '/gallery/pickleball/pickleball-3.jpg', category: 'Pickleball', alt: 'Pickleball Players' },
    { type: 'video', src: '/gallery/pickleball/pickleball-video-1.mp4', category: 'Pickleball', alt: 'Pickleball Game' },
    
    // Badminton
    { type: 'image', src: '/gallery/badminton/badminton-1.jpg', category: 'Badminton', alt: 'Badminton Match' },
    { type: 'image', src: '/gallery/badminton/badminton-2.jpg', category: 'Badminton', alt: 'Badminton Court' },
    { type: 'image', src: '/gallery/badminton/badminton-3.jpg', category: 'Badminton', alt: 'Badminton Players' },
    { type: 'video', src: '/gallery/badminton/badminton-video-1.mp4', category: 'Badminton', alt: 'Badminton Highlights' },
    
    // Volleyball
    { type: 'image', src: '/gallery/volleyball/volleyball-1.jpg', category: 'Volleyball', alt: 'Volleyball Match' },
    { type: 'image', src: '/gallery/volleyball/volleyball-2.jpg', category: 'Volleyball', alt: 'Volleyball Court' },
    { type: 'image', src: '/gallery/volleyball/volleyball-3.jpg', category: 'Volleyball', alt: 'Volleyball Team' },
    { type: 'video', src: '/gallery/volleyball/volleyball-video-1.mp4', category: 'Volleyball', alt: 'Volleyball Game' },
    
    // Events
    { type: 'image', src: '/gallery/events/event-1.jpg', category: 'Events', alt: 'Sports Event' },
    { type: 'image', src: '/gallery/events/event-2.jpg', category: 'Events', alt: 'Tournament' },
    { type: 'image', src: '/gallery/events/event-3.jpg', category: 'Events', alt: 'Awards Ceremony' },
    { type: 'video', src: '/gallery/events/event-video-1.mp4', category: 'Events', alt: 'Event Highlights' },
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const categoryIcons: { [key: string]: string } = {
    'All': '🏆',
    'Football': '⚽',
    'Box Cricket': '🏏',
    'Cricket Nets': '🎯',
    'Pickleball': '🎾',
    'Badminton': '🏸',
    'Volleyball': '🏐',
    'Events': '🎉'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <ImageIcon className="animate-pulse" size={48} />
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
                Gallery
              </h1>
              <ImageIcon className="animate-pulse" size={48} />
            </div>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto font-light">
              Moments captured from our sports facilities and events
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-40 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/50'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{categoryIcons[category]}</span>
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedMedia({ type: item.type as 'image' | 'video', src: item.src })}
              className="group relative aspect-square bg-slate-800 rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-semibold text-lg">{item.alt}</p>
                      <p className="text-green-400 text-sm">{item.category}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="text-white ml-1" size={36} fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-lg">{item.alt}</p>
                    <p className="text-green-400 text-sm">{item.category}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="mx-auto mb-4 text-slate-600" size={64} />
            <p className="text-xl text-slate-400">No items found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center transition-all z-50"
          >
            <X className="text-white" size={28} />
          </button>

          <div className="max-w-7xl max-h-[90vh] w-full">
            {selectedMedia.type === 'image' ? (
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedMedia.src}
                  alt="Gallery item"
                  width={1920}
                  height={1080}
                  className="max-w-full max-h-[90vh] object-contain rounded-2xl"
                />
              </div>
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full max-h-[90vh] rounded-2xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}