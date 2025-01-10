"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Heart, Stethoscope, Pill, AlertCircle, Syringe, Bandage, Microscope, Activity, PillBottle } from 'lucide-react';

const UnderConstructionPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const floatingIcons = [
    { Icon: Heart, size: 40, delay: 0, position: 'top-20 left-10', color: 'primary' },
    { Icon: Stethoscope, size: 35, delay: 1, position: 'bottom-20 right-10', color: 'primary' },
    { Icon: Pill, size: 30, delay: 2, position: 'top-1/2 right-20', color: 'primary' },
    { Icon: Syringe, size: 35, delay: 0.5, position: 'top-32 right-1/4', color: 'primary' },
    { Icon: Bandage, size: 30, delay: 1.5, position: 'bottom-1/4 left-20', color: 'primary' },
    { Icon: Microscope, size: 40, delay: 2.5, position: 'top-1/3 left-1/4', color: 'primary' },
    { Icon: PillBottle, size: 35, delay: 1.8, position: 'bottom-32 right-1/3', color: 'primary' },
    { Icon: Activity, size: 30, delay: 0.8, position: 'top-1/4 right-60', color: 'primary' }
  ];

  const floatingIconVariants = {
    initial: { y: 0, opacity: 0.2 },
    animate: (delay: number) => ({
      y: [-10, 10, -10],
      opacity: [0.7, 0.8, 0.6], // Adjusted opacity range
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    })
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-dark-black overflow-hidden relative">
      {/* Animated Background Elements with improved visibility */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ Icon, size, delay, position, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position}`}
            variants={floatingIconVariants}
            initial="initial"
            animate="animate"
            custom={delay}
          >
            <div className="relative">
              {/* Glow effect behind icon */}
              <motion.div
                className={`absolute inset-0 blur-sm ${
                  color === 'primary' 
                    ? 'bg-primary-blue/20' 
                    : 'bg-secondary-blue/20'
                }`}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay
                }}
              />
              {/* Icon with gradient stroke */}
              <Icon 
                size={size}
                className={`relative z-10 ${
                  color === 'primary'
                    ? 'text-primary-blue stroke-2'
                    : 'text-secondary-blue stroke-2'
                }`}
                style={{
                  filter: `drop-shadow(0 0 2px ${color === 'primary' ? '#00ACB1' : '#B8E6E7'})`
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full space-y-12 text-center"
        >
          {/* Logo with Glow Effect */}
          <motion.div 
            className="w-64 mx-auto mb-8 relative"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary-blue/20 filter blur-xl rounded-full"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
            <Image
              src="/Logo.svg"
              alt="Pharmansh Logo"
              width={256}
              height={80}
              className="w-full h-auto relative z-10"
            />
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-blue to-secondary-blue bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-light-gray max-w-2xl mx-auto leading-relaxed">
              We're revolutionizing healthcare solutions. Something innovative is on the way.
            </p>
          </motion.div>

          {/* Enhanced Email Signup Section */}
          <motion.div 
            className="max-w-xl mx-auto w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative group">
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-secondary-blue to-primary-blue rounded-full opacity-30 group-hover:opacity-60 transition duration-500"
                  animate={{
                    backgroundPosition: ['0%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <div className="relative flex gap-2 bg-white rounded-full p-1 shadow-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for exclusive updates"
                    className="flex-1 px-6 py-4 rounded-full bg-white border-none outline-none text-dark-black placeholder:text-light-gray/60 focus:ring-2 focus:ring-primary-blue/50 transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-primary-blue text-white rounded-full font-medium hover:bg-secondary-blue transition-colors duration-300 flex items-center gap-2"
                  >
                    Notify Me
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 flex items-center gap-2 text-primary-blue"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>Thank you! We'll keep you updated.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div className="w-full max-w-md mx-auto space-y-2">
            <motion.div 
              className="w-full h-1 bg-light-gray/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary-blue to-secondary-blue"
                initial={{ width: '0%' }}
                animate={{ width: '75%' }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </motion.div>
            <p className='text-text-muted'>Working Day & Night to bring Accessible Healthcare to your Fingertips</p>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center gap-8 pt-8">
            {['LinkedIn', 'Twitter', 'Instagram'].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="group relative"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block px-6 py-2 text-lg text-light-gray group-hover:text-primary-blue transition-colors duration-300">
                  {link}
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;