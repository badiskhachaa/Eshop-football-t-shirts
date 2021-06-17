import React from 'react'
import './Backdrop.css'

const Backdrop = ({show,click}) => {
    return show && <div className="backdrop" onClick={click}> hola </div>;
};

export default Backdrop;
