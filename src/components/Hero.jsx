import React from 'react';
import HeroImage from '../assets/about.jpg';// Make sure this is in src/assets/

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img
        src={HeroImage}
        alt="Yousuf Profile"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
          Yousuf
        </span>
        , Full-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <a href="#contact">
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105'>
            Contact With Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
