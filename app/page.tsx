// app/page.tsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Facilities />
      <Testimonials />
      <CTA />
    </main>
  );
}