import preloader from '../images/users/preloader.svg'
import React from 'react';

const Preloader = ({ className }) => {
    return (
        <img className={`preloader ${className}`} src={preloader} />
    )
}

export default Preloader;