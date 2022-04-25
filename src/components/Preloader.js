import preloader from '../images/users/preloader.svg'
import React from 'react';

const Preloader = (props) => {
    return (
        <img className={`preloader ${props.className}`} src={preloader} />
    )
}

export default Preloader;