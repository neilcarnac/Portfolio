import React from 'react';
import Logo from '../assets/logo.svg';
const Header = () => {
  return(
    <>
    <header className='py-6'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#'>
          <h2 className='text-xl uppercase font-medium mb-2 tracking-wide text-gradient' >Neil <br /> <h2 className='text-white'>Carnac</h2></h2>
        </a>
        <button className='btn btn-sm '>
          Work with me
        </button>
      </div>

    </div>
    </header>

    </>
  );};

export default Header;
