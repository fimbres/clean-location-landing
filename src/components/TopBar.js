import React from 'react';

import LogoImg from '../images/icon.png';

const TopBar = () => {
  return (
    <div className='flex w-screen h-28 justify-start items-center px-6 fixed top-0 right-0 left-0 bg-zinc-800'>
      <img src={LogoImg} className='w-16 w-16 cover-mode' alt='Logo'/>
      <div className='font-semibold text-white text-2xl ml-6'>Clean Location</div>
    </div>
  )
}

export default TopBar;
