/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { ArrowRight, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { ShinyText } from './components/ShinyText';
import { ApplyModal } from './components/ApplyModal';
import { InfoModal } from './components/InfoModal';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [activeInfoModal, setActiveInfoModal] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleNavClick = (item: string) => {
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveInfoModal(item);
    }
  };

  return (
    <div className="relative w-full h-screen min-h-[640px] bg-black text-white font-['Inter',sans-serif] overflow-hidden select-none">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
        />
        {/* Subtle cinematic gradient overlays for pristine readability while showcasing the video */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {/* Navigation & Top Section Container */}
        <div>
          {/* Navigation Bar */}
          <Navbar
            onNavClick={handleNavClick}
            onContactClick={() => setActiveInfoModal('Contact us')}
          />

          {/* Top Section (below nav): Two-column layout on large screens, stacked on mobile */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-8 items-start">
              {/* Left column */}
              <div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl font-normal">
                  We deliver transformative programs that empower emerging product designers with
                  cutting-edge expertise and vision to thrive globally.
                </p>
              </div>

              {/* Right column (right-aligned on lg+) */}
              <div className="lg:text-right">
                <p className="text-white/80 text-sm md:text-base font-normal tracking-tight">
                  8000+ Talented Designers Launched !
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section (center): Vertically and horizontally centered content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto text-center flex flex-col items-center justify-center py-6 sm:py-8">
          {/* Small uppercase text above heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-white/80 text-xs md:text-sm uppercase tracking-tight font-medium mb-3 sm:mb-4 md:mb-5"
          >
            Seats for Next Program Opening Soon
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-tighter flex flex-col items-center"
          >
            {/* Line 1: "Become" in white, font-medium */}
            <span className="text-white font-medium block">
              Become
            </span>

            {/* Line 2: "Product Leader." with animated shiny gradient effect */}
            <span className="block mt-1 sm:mt-2 md:mt-3">
              <ShinyText
                baseColor="#64CEFB"
                shineColor="#ffffff"
                duration={3}
                angle={100}
                className="font-bold"
              >
                Product Leader.
              </ShinyText>
            </span>
          </motion.h1>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            <button
              onClick={() => setApplyModalOpen(true)}
              className="group inline-flex items-center gap-3 bg-black hover:bg-gray-900 border border-white/20 hover:border-white/40 text-white rounded-full px-6 md:px-8 py-3 md:py-4 transition-all duration-300 shadow-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64CEFB]"
              aria-label="Apply for Next Enrollment"
            >
              <span className="text-sm md:text-base font-medium tracking-tight">
                Apply for Next Enrollment
              </span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Bar: Subtle video controls and cohort badge */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-4 sm:pb-6 flex items-center justify-between text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#64CEFB] animate-pulse" />
            <span className="hidden sm:inline">Winter 2026 Cohort • Applications Closing in 7 Days</span>
            <span className="sm:hidden">Cohort 14 Closing Soon</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title={isPlaying ? 'Pause background video' : 'Play background video'}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
              title={isMuted ? 'Unmute video audio' : 'Mute video audio'}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modals */}
      <ApplyModal isOpen={applyModalOpen} onClose={() => setApplyModalOpen(false)} />
      <InfoModal
        type={activeInfoModal}
        onClose={() => setActiveInfoModal(null)}
        onOpenApply={() => setApplyModalOpen(true)}
      />
    </div>
  );
}
