import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../styles/globals.css";
import Link from 'next/link';
import Image from 'next/image';

export default props => {
  return (
    <Menu>
       <Link href="/" className="mx-2">Accueil</Link>
      <Link href="/contact" className="mx-2">Contact</Link>
      <Link href="/about" className="mx-2">À propos</Link>
      <div className='flex justify-center mt-32'>
      <Image src="/logo.png" alt="logo" width={100} height={100} className="shadow-md shadow-white"></Image>
      </div>
    </Menu>
  );
};