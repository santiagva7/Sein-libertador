import React from "react"
import Image from "next/image"
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const instagram = "https://www.instagram.com/sein.libertador/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="

const Header = () => {
  return (
    <header className="bg-p1 border-gray-300 flex border-b border-p8">
      <div className="pl-2 h-full flex items-center justify-center">
        <Image src="/iconoPng.png" width={75} height={75} alt="Icono distintivo de la empresa Sein, de los hermanos Hengen" />
      </div>
      <div className="max-w-2xl mx-auto font-mono text-center  backdrop-blur-md">
        <div className="p-2 shadow-2xl">
        <h1 className="font-sans font-bold text-logo border-p1 text-4xl">SEIN </h1>
        <p className="text-logo text-center text-base"> Libertador</p>
        </div>
      </div>
      <div className="flex">
        <div className="h-full flex items-center justify-center">
          <a href="https://wa.me/3329676205"><FaWhatsapp className="text-xl text-whatsapp m-4 shadow-lg" /></a>
        </div>
        <div className="h-full flex items-center justify-center">
          <a href="mailto:hengenotoniel@gmail.com"><FiMail className="text-xl text-p4 m-4 shadow-lg" /></a>
        </div>
        <div className="h-full flex items-center justify-center">
          <a href={instagram}><FaInstagram className="text-xl text-p4 m-4 shadow-lg" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;