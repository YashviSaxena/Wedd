// VeereDiWedding.js

import React from 'react';
import coupleimg from '../android-chrome-512x512.png';
const VeereDiWedding = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-pink-200">
      <h1 className='italic'>You're welcomed to the most awaited event of the family!!!</h1>
      {/* <h1 className="font-bold text-cyan-100 lg:text-6xl md:text-4xl sm:text-2xl italic">Veere Di Wedding Hai</h1> */}
      <img src={coupleimg} alt="" />
      <h1 className='italic'>ladkeWaale💞</h1>
    </div>
  );
};

export default VeereDiWedding;
