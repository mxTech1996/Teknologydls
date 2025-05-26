'use client';
import CartSectionComponent from '@/components/organisms/CartSection';
import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';

export default function MyCart() {
  return (
    <main>
      <Navbar data={dataSite} />
      <CartSectionComponent />
      <Footer />
    </main>
  );
}
