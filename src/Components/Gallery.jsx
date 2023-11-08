'use client'
import React, { useState } from "react"
import Image from "next/image"

const Gallery = () => {
  const [imageNumber, setImageNumber] = useState(0);

  if (imageNumber === 2) {
    setImageNumber(0);
  }

  if (imageNumber < 0) {
    setImageNumber(1);
  }

  const nextSlide = () => {
    setImageNumber((prevImageNumber) => (prevImageNumber + 1) % 2);
  };

  const prevSlide = () => {
    setImageNumber((prevImageNumber) => (prevImageNumber - 1 + 4) % 2);
  };

  let posteo = "";
  switch (imageNumber) {
    case 0:
      posteo = "/posteo-0.jpg";
      break;
    case 1:
      posteo = "/posteo-1.jpg";
      break;
    default:
      console.log("El número no coincide con ningún caso.");
  }

  return (
    <div className="flex justify-center w-2/4 h-full overflow-hidden my-20">
      <div className="mt-12">
        <button className="p-2" onClick={prevSlide}>
          <Image src="/izq.png" width={8} height={8} className="m-10 w-auto h-auto" alt="arrow" />
        </button>
      </div>
      <div className="flex items-center h-full">
        <div className="mx-auto"> {/* Agregar un div contenedor */}
          <Image
            src={posteo}
            alt="Trabajos realizados"
            priority={true}
            className="m-20 h-full rounded-lg"
            height={600}
            width={600}
          />
        </div>
      </div>
      <div className="mt-12">
        <button className="p-2 sm:p-3 rounded-full" onClick={nextSlide}>
          <Image src="/der.png" width={8} height={8} className="m-10 w-auto h-auto" alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
