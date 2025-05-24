// components/OurProcessSection.jsx
'use client';

import { motion } from 'framer-motion';
import {
  FiMessageSquare, // Step 1: Consultation
  FiFileText, // Step 2: Quote
  FiShoppingCart, // Step 3: Order
  FiTruck, // Step 4: Delivery
  FiChevronRight, // Connector
} from 'react-icons/fi';

const processStepsData = [
  {
    step: 1,
    icon: (
      <FiMessageSquare className='w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4' />
    ),
    title: 'Initial Consultation & Setup',
    description:
      "Reach out with your requirements. We'll discuss your needs, guide you through our product catalog, and quickly set up your wholesale account.",
  },
  {
    step: 2,
    icon: (
      <FiFileText className='w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4' />
    ),
    title: 'Personalized Quote & Bundling',
    description:
      'Receive a competitive, transparent quote tailored to your volume and specific needs. We also offer custom hardware bundling services.',
  },
  {
    step: 3,
    icon: (
      <FiShoppingCart className='w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4' />
    ),
    title: 'Effortless Ordering & Payment',
    description:
      'Place your order seamlessly with your dedicated account manager. We provide secure and flexible payment options to suit your business.',
  },
  {
    step: 4,
    icon: (
      <FiTruck className='w-10 h-10 sm:w-12 sm:h-12 text-orange-500 mb-4' />
    ),
    title: 'Swift Delivery & Support',
    description:
      'Benefit from our fast nationwide shipping and reliable logistics. Our commitment continues with dedicated after-sales support for all your needs.',
  },
];

const OurProcessSection = ({ companyName }) => {
  // companyName from general data.name
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id='our-process'
      className='py-16 sm:py-24 bg-gray-800' // Slightly different dark background
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-20'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-orange-500 tracking-wide uppercase'>
            How We Work
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Our Streamlined Procurement Process
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
            Partnering with {companyName || 'Us'} is straightforward and
            efficient. Here’s how we get you the IT equipment you need:
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className='relative'>
          {/* Desktop: Horizontal layout with connecting lines (visual only) */}
          <div className='hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-700 transform -translate-y-1/2 -z-10'>
            {/* This line is a visual guide, actual items are positioned by grid */}
          </div>

          <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8'>
            {processStepsData.map((step, index) => (
              <motion.div
                key={step.step}
                className='relative flex flex-col items-center text-center p-6 bg-gray-900 rounded-xl shadow-2xl border border-gray-700 hover:border-orange-500/70 transition-colors duration-300'
                variants={stepCardVariants}
              >
                <div className='absolute -top-5 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl font-bold border-4 border-gray-800'>
                  {step.step}
                </div>
                <div className='mt-8 sm:mt-10'>
                  {' '}
                  {/* Space for the number bubble */}
                  {step.icon}
                  <h3 className='text-xl sm:text-2xl font-semibold text-white mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-gray-400 text-sm leading-relaxed'>
                    {step.description}
                  </p>
                </div>
                {/* Visual connector for desktop, not displayed on the last item */}
                {index < processStepsData.length - 1 && (
                  <div className='hidden lg:flex absolute top-1/2 right-0 transform translate-x-[calc(50%-1rem)] -translate-y-1/2 items-center text-gray-600'>
                    {/* Adjust 1rem based on half of gap-8 (which is 2rem) */}
                    <FiChevronRight className='w-8 h-8 opacity-50' />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurProcessSection;
