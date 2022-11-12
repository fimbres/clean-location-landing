import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-full h-56 justify-center items-center bg-zinc-800'>
        <div className='font-semibold text-white text-2xl'>All rights reserved to MetaFusion.TECH@{new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer;
