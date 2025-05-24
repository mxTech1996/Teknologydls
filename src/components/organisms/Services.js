// components/ServicesSection.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Helper function to truncate text (optional, if descriptions get too long)
const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, text.lastIndexOf(' ', maxLength)) + '...';
};

const ServicesSection = ({ data }) => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  // Determine grid columns based on number of services for better layout
  // For 5 services, a 3-column layout on large screens is fine.
  // If you had 4, maybe 2 or 4 columns.
  // This example uses up to 3 columns.
  const gridColsClass =
    data.services.length === 4
      ? 'lg:grid-cols-4 xl:grid-cols-4'
      : 'lg:grid-cols-3';

  return (
    <section id='services' className='py-16 sm:py-24 bg-gray-900'>
      {' '}
      {/* Matching main dark theme */}
      <motion.div
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Our Comprehensive{' '}
            <span className='text-orange-500'>IT Services</span>
          </h2>
          <p className='mt-4 text-lg text-gray-400 max-w-2xl mx-auto'>
            Tailored solutions to meet your business&#39;s unique technology
            needs and drive success.
          </p>
        </motion.div>

        {/* Services Grid */}
        {/* Adjust grid columns for different numbers of items: sm:grid-cols-2 lg:grid-cols-3 or lg:grid-cols-4 */}
        <div
          className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${gridColsClass}`}
        >
          {data.services.map((service, index) => (
            <motion.div
              key={service.title + index} // Use a more unique key if titles can repeat
              className='group bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-orange-500/30 hover:ring-1 hover:ring-orange-500'
              variants={cardVariants}
            >
              {service.image && (
                <div className='relative w-full h-56 sm:h-60'>
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout='fill'
                    objectFit='cover'
                    className='transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'></div>
                </div>
              )}
              <div className='p-6 flex flex-col flex-grow'>
                <h3 className='text-xl sm:text-2xl font-semibold text-white mb-3'>
                  {service.title}
                </h3>
                <p className='text-gray-400 text-sm mb-6 flex-grow'>
                  {truncateText(service.description, 120)}{' '}
                  {/* Truncate if needed */}
                </p>
                {/* <Link
                  href={`/services/${service.title
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`} // Example link structure
                  className='mt-auto inline-flex items-center justify-center px-6 py-3 border border-orange-500 text-sm font-medium rounded-md text-orange-500 hover:bg-orange-500 hover:text-white transition-colors group-hover:bg-orange-500 group-hover:text-white'
                >
                  Learn More
                  <FiArrowRight className='ml-2 w-5 h-5' />
                </Link> */}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
