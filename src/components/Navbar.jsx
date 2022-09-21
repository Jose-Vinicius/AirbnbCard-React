import React from 'react';
import AirbnbLogo from '../../public/assets/image/airbnb-1.svg';

export default function NavBar(){
    return(
        <nav className='nav'>
            <img src={AirbnbLogo} alt="Airbnb Logo" />
        </nav>
    )
}