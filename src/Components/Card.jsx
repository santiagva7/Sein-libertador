import React from 'react'

const Card = ({ title, text }) => {
  return (
    <div className="p-4 h-full w-full ">
      <div className="p-4 border border-p8 rounded backdrop-opacity-10 shadow-2xl bg-p2">
        <h2 className="text-xl font-semibold text-p4 text-center font-sans backdrop-blur-lg background">{title}</h2>
        <p className="text-lg mt-2 text-p4 text-center font-sans">{text}</p>
      </div>
    </div>
  );
};

export default Card;