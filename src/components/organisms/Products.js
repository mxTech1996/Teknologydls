// components/ProductSection.jsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

// Tus datos de productos (asegúrate que estén disponibles aquí o pasados como prop)
// const productsData = [ ... ]; // Ya los tienes en el JSON principal que pasarás como prop

// Función para truncar descripción
const truncateDescription = (text, maxLength = 70) => {
  // Ajusta maxLength según el diseño
  if (!text || text.length <= maxLength) {
    return text;
  }
  return text.substring(0, text.lastIndexOf(' ', maxLength)) + '...';
};

const ProductSection = ({ data }) => {
  // data aquí sería el objeto JSON completo
  const products = data.products;

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.section
      id='products'
      className='py-16 sm:py-24 bg-gray-900' // Fondo oscuro principal
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Title Area */}
        <motion.div
          className='text-center mb-12 sm:mb-16'
          variants={titleVariants}
        >
          <h3 className='text-base font-semibold text-orange-500 tracking-wide uppercase'>
            Our Product Catalog
          </h3>
          <h2 className='mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Explore Our IT Hardware
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <motion.div
              key={product.id}
              className='group relative bg-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-700 hover:shadow-orange-500/30 hover:ring-1 hover:ring-orange-500 transition-all duration-300'
              variants={cardVariants}
            >
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative'>
                {/* Usamos un div para el aspect ratio y next/image con layout="fill" */}
                <div className='pt-[100%] sm:pt-[85%]'>
                  {' '}
                  {/* Ajusta el padding-top para el aspect ratio deseado */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout='fill'
                    objectFit='cover'
                    className='absolute inset-0 h-full w-full group-hover:scale-105 transition-transform duration-500'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity'></div>
              </div>
              <div className='p-4 sm:p-6 flex flex-col flex-grow'>
                <h3 className='text-lg sm:text-xl font-semibold text-white'>
                  {product.name}
                </h3>
                <p className='mt-2 text-sm text-gray-400 flex-grow min-h-[60px]'>
                  {' '}
                  {/* min-h para alinear botones */}
                  {truncateDescription(product.description)}
                </p>
                <div className='mt-4 flex items-center justify-between'>
                  <p className='text-xl sm:text-2xl font-bold text-orange-500'>
                    ${parseFloat(product.price).toFixed(2)}
                  </p>
                  {product.stock > 0 ? (
                    <span className='text-xs font-medium text-green-400 bg-green-900/50 px-2.5 py-1 rounded-full border border-green-700'>
                      In Stock
                    </span>
                  ) : (
                    <span className='text-xs font-medium text-red-400 bg-red-900/50 px-2.5 py-1 rounded-full border border-red-700'>
                      Out of Stock
                    </span>
                  )}
                </div>
                <Link
                  href={`/products/${product.id}`} // Ajusta la ruta si es necesario
                  className='mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-semibold rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500 transition-colors'
                >
                  View Details
                  <FiArrowRight className='ml-2 w-4 h-4' />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductSection;
