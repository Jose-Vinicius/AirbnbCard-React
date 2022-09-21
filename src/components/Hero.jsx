import React from 'react';
import PhotoGrid from '../../public/assets/image/photo-grid.png'

export default function Hero(){
     return(
         <section className="hero">
             <img src={PhotoGrid} alt="Colagem de fotos" className='hero__img'/>
             <h2 className='hero__title'>Online Experiences</h2>
             <p className="hero__content">
             Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
             </p>
         </section>
     )
}