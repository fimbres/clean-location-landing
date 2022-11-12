import React from 'react';

const Footer = () => {
  return (
    <div className='flex w-screen h-56 justify-center items-center fixed bottom-0 right-0 left-0 bg-zinc-800'>
        <div className='font-semibold text-white text-2xl'>All rights reserved to MetaFusion.TECH@{new Date().getFullYear()}</div>
    </div>
  )
}

export default Footer;
