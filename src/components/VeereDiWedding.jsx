// VeereDiWedding.js

import React from 'react';
import coupleimg from '../bride-groom.png';
const VeereDiWedding = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-pink-200">
      <h1 className="italic text-2xl text-center sm:text-2xl md:text-4xl lg:text-5xl">
        You're welcomed to the most awaited event of the family!!!
      </h1>
      <img className="w-full max-w-sm md:max-w-md lg:max-w-lg" src={coupleimg} alt="" />
      <h1 className="italic text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">ladkeWaale💞</h1>
    </div>
  );
};

export default VeereDiWedding;
