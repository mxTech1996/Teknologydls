// components/InfoAccordionSection.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiInfo } from 'react-icons/fi';

// Los datos de "info" vendrán como prop desde el objeto JSON principal
// const infoData = [ ... ];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  const contentVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0, y: -10 },
    open: {
      opacity: 1,
      height: 'auto',
      marginTop: '1rem', // Corresponds to mt-4
      y: 0,
      transition: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }, // Custom ease for smoother feel
    },
  };

  const renderDescription = (description, isList) => {
    if (isList) {
      const listItems = description
        .split(',')
        .map((s) => s.trim())
        .filter((s) => s);
      return (
        <ul className='list-disc list-inside space-y-1.5 text-gray-400 pl-1'>
          {listItems.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      );
    }
    return <p className='text-gray-400 leading-relaxed'>{description}</p>;
  };

  return (
    <motion.div
      className='border-b border-gray-700 last:border-b-0'
      initial={false}
    >
      <motion.button
        onClick={onToggle}
        className='flex justify-between items-center w-full py-5 sm:py-6 text-left text-lg sm:text-xl font-semibold text-gray-200 hover:text-orange-500 focus:outline-none transition-colors duration-200'
        aria-expanded={isOpen}
      >
        <span>{item.title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown
            className={`w-6 h-6 transition-colors ${
              isOpen ? 'text-orange-500' : 'text-gray-500'
            }`}
          />
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={contentVariants}
            className='overflow-hidden'
          >
            <div className='pb-5 sm:pb-6 pr-6'>
              {' '}
              {/* Added pr-6 to avoid text touching chevron space */}
              {renderDescription(item.description, item.isList)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InfoAccordionSection = ({ data }) => {
  // data es el JSON principal
  const infoItems = data.info.map((item, index) => ({
    ...item,
    id: item.title.toLowerCase().replace(/\s+/g, '-') + index, // Create a unique ID
    isList: item.title === 'Types and Features', // Dynamically set isList
  }));

  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
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

  return (
    <motion.section
      id='info'
      className='py-16 sm:py-24 bg-gray-900' // Main dark background
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {' '}
        {/* Slightly wider for accordion */}
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-orange-500 tracking-wide uppercase'>
            Key Information
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Valuable Insights & Details
          </h2>
        </motion.div>
        {/* Accordion */}
        <motion.div
          className='bg-gray-800 shadow-xl rounded-lg border border-gray-700'
          variants={titleVariants} // Re-use variant for a slight delay for the whole block
        >
          {infoItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openAccordionId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </motion.div>
        <motion.div
          className='mt-12 sm:mt-16 text-center'
          variants={titleVariants}
        >
          <a
            href={`mailto:${data.email}`} // Using email from general data
            className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-orange-500 transition-colors'
          >
            Contact Us for More
            <FiInfo className='ml-2 w-5 h-5' />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InfoAccordionSection;
