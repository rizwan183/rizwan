import React from 'react';
import {  BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
        <a href="https://wa.me/+918318829181">
          <BsWhatsapp />          
        </a> 
    </div>
    <div>
      <a href='https://www.linkedin.com/in/mohammad-rizwan-ansari-6a4a04137/'>
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href='https://www.instagram.com/rizwan.ansari.183/'>
        <BsInstagram />
      </a>
      
    </div>
  </div>
);

export default SocialMedia;