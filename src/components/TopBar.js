import React,{useState} from 'react';

import LogoImg from '../images/icon.png';

const TopBar = () => {

  // const [scrollHeight, setScrollHeight] = useState(0);

  // const isBrowser = typeof('window' !== "undefined");

  // function handleScroll(){
  //   const position = window.pageYOffset;
  //   setScrollHeight(position);
  // }

  // if(isBrowser){
  //   window.addEventListener('scroll',handleScroll);
  // }

  return (
    <div className={`flex w-full transition-all ease-in-out h-28 justify-start items-center px-6 fixed top-0 right-0 left-0 ${scrollHeight === 0 ? 'bg-transparent' : 'bg-zinc-800'}`}>
      <img src={LogoImg} className='w-16 w-16 cover-mode' alt='Logo'/>
      <div className='font-semibold text-white text-2xl ml-6'>Clean Location</div>
    </div>
  )
}

export default TopBar;
