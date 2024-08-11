import React from 'react'

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; 
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'> 
    <div className='flex flex-shrink-0 items-center'>
      BM
    </div> 
    <div className='m-8 flex items-center gap-4 text-2xl'>
      <FaLinkedin />
    <a href='https://github.com/bultimistry'>  <FaGithub /> 
     </a>
       <FaSquareXTwitter />
    <a href='https://www.instagram.com/mitrsy_bulti?igsh=MXFpMDFyNG9mMzFkeg=' > <FaInstagram /> </a> 
      </div>
    </nav>
    
  )
}

export default Navbar;