import preloader from '../images/preloader.svg'
import React from 'react';

const Preloader = ({ className }) => {
    return (
        <img className={`preloader ${className}`} src={preloader} />
    )
}

export default Preloader;