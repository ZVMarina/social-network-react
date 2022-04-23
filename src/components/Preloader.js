import preloader from '../images/users/preloader.svg'
import React from 'react';

class Preloader extends React.Component {
    render() {
        return (
            <img className={`preloader ${this.props.className}`} src={preloader} />
        )
    }
}
export default Preloader;