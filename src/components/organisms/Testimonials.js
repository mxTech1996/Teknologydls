// components/TestimonialCarousel.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar, FiUser } from 'react-icons/fi';
import Image from 'next/image';
// Si prefieres estrellas sólidas: import { FaStar } from "react-icons/fa";

// Tus datos de testimonios (references) vendrán como prop
// const testimonialsData = [ ... ];

// Helper para parsear nombre y título (ya lo teníamos)
const parseNameAndTitle = (nameStr) => {
  if (nameStr.includes(',')) {
    const parts = nameStr.split(',');
    return {
      name: parts[0].trim(),
      title: parts.slice(1).join(',').trim(),
    };
  }
  // Si el nombre es largo, podríamos intentar tomar solo la primera parte como "empresa"
  // y dejar el título como "Valued Partner" o algo similar.
  // Por ahora, si no hay coma, todo es nombre y el título es genérico.
  return { name: nameStr, title: 'Valued Client / Partner' };
};

const TestimonialCarousel = ({ data }) => {
  // data es el JSON principal
  const testimonials = data.references;
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newIndex = currentIndex + newDirection;
    if (newIndex < 0) {
      newIndex = testimonials.length - 1;
    } else if (newIndex >= testimonials.length) {
      newIndex = 0;
    }
    setCurrentIndex([newIndex, newDirection]);
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // No renderizar nada si no hay testimonios
  }

  const activeTestimonial = testimonials[currentIndex];
  const { name: authorName, title: authorTitle } = parseNameAndTitle(
    activeTestimonial.name
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      zIndex: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <section
      id='testimonials'
      className='relative py-16 sm:py-24 bg-gray-800 text-white overflow-hidden'
    >
      {/* Opcional: Patrón de fondo sutil si lo deseas */}
      {/* <div className="absolute inset-0 opacity-5 bg-[url('/path-to-pattern.svg')]"></div> */}
      <div className='absolute inset-0 bg-black/20'></div>{' '}
      {/* Overlay sutil para más profundidad */}
      <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          className='text-center mb-12 sm:mb-16'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className='text-base font-semibold text-orange-500 tracking-wide uppercase'>
            Client Feedback
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            What Our Partners Say
          </h2>
        </motion.div>

        <div className='relative min-h-[380px] sm:min-h-[320px] flex flex-col justify-center'>
          {' '}
          {/* Altura ajustada */}
          <AnimatePresence initial={false} custom={direction} mode='wait'>
            <motion.div
              key={currentIndex} // Importante para que AnimatePresence detecte el cambio
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              className='w-full' // No es 'absolute' para que el contenedor padre ajuste su altura si el contenido varía mucho (aunque aquí es bastante estático)
            >
              <blockquote className='text-center'>
                <p className='text-xl sm:text-2xl font-medium leading-relaxed text-gray-200 px-4 sm:px-0'>
                  “{activeTestimonial.description}”
                </p>
                <footer className='mt-8'>
                  <div className='flex justify-center items-center mb-3'>
                    {[...Array(activeTestimonial.rating || 5)].map(
                      (
                        _,
                        i // Default a 5 estrellas si no hay rating
                      ) => (
                        <FiStar
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-current'
                        />
                      )
                    )}
                  </div>
                  <div className='flex items-center justify-center'>
                    {activeTestimonial.image ? (
                      <Image
                        className='w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover mr-4 shadow-lg border-2 border-orange-500/50'
                        src={activeTestimonial.image}
                        alt={authorName}
                        width={56}
                        height={56}
                      />
                    ) : (
                      <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-700 flex items-center justify-center mr-4 shadow-lg border-2 border-gray-600'>
                        <FiUser className='w-6 h-6 sm:w-7 sm:h-7 text-orange-500' />
                      </div>
                    )}
                    <div>
                      <div className='font-semibold text-lg text-white'>
                        {authorName}
                      </div>
                      <div className='text-gray-400 text-sm'>{authorTitle}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Botones de Navegación */}
        <button
          onClick={() => paginate(-1)}
          className='absolute top-1/2 left-0 sm:-left-2 md:-left-4 transform -translate-y-1/2 bg-gray-700/70 hover:bg-orange-500/80 text-white p-2 sm:p-3 rounded-full focus:outline-none transition-all duration-200 z-10 shadow-lg hover:scale-110'
          aria-label='Previous testimonial'
        >
          <FiChevronLeft className='w-6 h-6' />
        </button>
        <button
          onClick={() => paginate(1)}
          className='absolute top-1/2 right-0 sm:-right-2 md:-right-4 transform -translate-y-1/2 bg-gray-700/70 hover:bg-orange-500/80 text-white p-2 sm:p-3 rounded-full focus:outline-none transition-all duration-200 z-10 shadow-lg hover:scale-110'
          aria-label='Next testimonial'
        >
          <FiChevronRight className='w-6 h-6' />
        </button>

        {/* Puntos de Paginación */}
        <div className='absolute bottom-0 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2.5 mt-8'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection =
                  index > currentIndex ? 1 : index < currentIndex ? -1 : 0;
                setCurrentIndex([index, newDirection]);
              }}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                currentIndex === index
                  ? 'bg-orange-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
