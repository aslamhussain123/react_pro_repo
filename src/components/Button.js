import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large']
export const Button = ({
    children,
    buttonSize,
    buttonStyle,
    type,
    onClick
}) => {
    const checkButtonStyle = STYLES.inlcludes(buttonStyle)
    ? buttonStyle : STYLES[0];

    const checkButtonSize =  SIZES.includes(buttonSize)
    ? buttonSize : SIZES[0];

    return(
        <Link to='/signup' className="btn-mobile">
            <button
            className={'btn ${checkbuttonStyle} ${checkbuttonSize}'} onClick={onClick} type={type}
            >

            </button>
        </Link>
    )
}