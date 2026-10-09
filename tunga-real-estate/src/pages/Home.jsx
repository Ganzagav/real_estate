import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { BsArrowUpRight } from 'react-icons/bs';

const offerings = [
  {
    title: "Custom Home Design",
    description: "We build from scratch based on your vision, not a predefined template.",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Project Management",
    description: "From permits to handover, we handle it all with precision and care.",
    img: "https://images.unsplash.com/photo-1541888088374-c102ce06d042?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Interior Design",
    description: "Where function meets aesthetic. Curated finishes, from top to bottom.",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Sand Inspiration) */}
      <section className="bg-brand-sand min-h-screen relative flex flex-col items-center justify-end overflow-hidden pt-32 pb-12 px-6">
        {/* Large Background Text */}
        <h1 className="absolute top-32 md:top-24 text-[22vw] font-bold text-black/[0.03] select-none pointer-events-none leading-none tracking-tighter">
          TUNGA
        </h1>
        
        <ScrollReveal direction="up" delay={0.2}>
          <div className="relative z-10 max-w-5xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80" 
              alt="Modern Home Render" 
              className="w-full h-auto object-cover shadow-2xl"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* 2. ABOUT US SECTION (Dark Grid Inspiration) */}
      <section id="about" className="bg-brand-charcoal text-brand-white grid-borders-dark">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column (Sticky Sidebar style) */}
          <div className="md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-brand-border-dark flex flex-col justify-between">
            <ScrollReveal direction="left">
              <span className="text-gray-500 font-mono text-sm mb-4 block">[01]</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-12">About us</h2>
              <div className="text-gray-400 text-sm space-y-1">
                <p>7+ years of industry experience.</p>
                <p>Tailored, turn-key building solutions.</p>
                <p>Client first approach from start to finish.</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column */}
          <div className="md:col-span-8 p-8 md:p-16 flex items-center">
            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-2xl md:text-4xl leading-relaxed text-gray-300 font-light">
                Founded with a vision to redefine residential living, <span className="text-white font-medium">Tunga blends innovative architecture with functional design.</span> From concept to completion.
              </p>
            </ScrollReveal>
          </div>
          
        </div>
      </section>

      {/* 3. WHAT WE OFFER SECTION (Light Grid List Inspiration) */}
      <section id="offerings" className="bg-brand-white grid-borders">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12">
          
          {/* Left Column */}
          <div className="md:col-span-4 p-8 md:p-16 border-b md:border-b-0 md:border-r border-brand-border relative">
            <div className="sticky top-32">
              <ScrollReveal direction="left">
                <span className="text-gray-400 font-mono text-sm mb-4 block">[03]</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">What<br/>We Offer?</h2>
                <p className="text-brand-text-muted text-sm max-w-[250px]">
                  We design from scratch shaped by your vision, not a predefined template.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column (The List) */}
          <div className="md:col-span-8 flex flex-col">
            {offerings.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className={`p-8 md:p-12 flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-8 ${idx !== offerings.length - 1 ? 'border-b border-brand-border' : ''}`}>
                  
                  {/* Text Content */}
                  <div className="max-w-md">
                    <h3 className="text-2xl font-bold text-brand-charcoal mb-3">{item.title}</h3>
                    <p className="text-brand-text-muted mb-8 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <button className="flex items-center gap-4 group">
                      <span className="font-semibold text-sm">Explore More</span>
                      <div className="w-10 h-10 rounded-full bg-brand-charcoal text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BsArrowUpRight className="text-lg" />
                      </div>
                    </button>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-64 h-48 shrink-0 rounded-lg overflow-hidden border border-brand-border">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}