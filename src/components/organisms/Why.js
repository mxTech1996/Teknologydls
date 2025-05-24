// components/WhyChooseUsSection.jsx
'use client';

import { motion } from 'framer-motion';
import {
  FiArchive, // For Vast Inventory
  FiDollarSign, // For Strategic Pricing
  FiTruck, // For Reliable Logistics
  FiHeadphones, // For Expert Support
} from 'react-icons/fi';

const benefitsData = [
  {
    icon: <FiArchive className='w-10 h-10 mb-4 text-orange-500' />,
    title: 'Vast Inventory, Premier Brands',
    description:
      'Gain immediate access to an extensive catalog of IT hardware and accessories from globally recognized brands, ensuring you find exactly what you need, when you need it.',
  },
  {
    icon: <FiDollarSign className='w-10 h-10 mb-4 text-orange-500' />,
    title: 'Strategic Wholesale Pricing',
    description:
      'Leverage our competitive wholesale pricing and volume discount structures, designed to maximize your profit margins and provide exceptional value for your investments.',
  },
  {
    icon: <FiTruck className='w-10 h-10 mb-4 text-orange-500' />,
    title: 'Reliable & Efficient Logistics',
    description:
      'Experience seamless procurement with our streamlined order fulfillment and fast, dependable nationwide shipping, minimizing downtime and keeping your projects on track.',
  },
  {
    icon: <FiHeadphones className='w-10 h-10 mb-4 text-orange-500' />,
    title: 'Dedicated Expert Support',
    description:
      "Partner with a team that's committed to your success. Our knowledgeable account managers offer personalized support, from product selection to after-sales service.",
  },
];

const WhyChooseUsSection = ({ companyName }) => {
  // companyName from general data.name
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

  const benefitCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id='why-choose-us'
      className='py-16 sm:py-24 bg-gray-900' // Main dark background
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Why Partner with{' '}
            <span className='text-orange-500'>{companyName || 'Us'}?</span>
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-3xl mx-auto'>
            Empowering your business with unparalleled access to technology,
            expertise, and dedicated service that drives your growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              className='bg-gray-800 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-700 flex flex-col items-center text-center hover:border-orange-500/50 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1'
              variants={benefitCardVariants}
            >
              {benefit.icon}
              <h3 className='mt-2 text-xl sm:text-2xl font-semibold text-white mb-3'>
                {benefit.title}
              </h3>
              <p className='text-gray-400 text-sm leading-relaxed'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;
