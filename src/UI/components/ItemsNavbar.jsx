import React from 'react';
import { Link } from 'react-router-dom';

export const ItemsNavbar = ({text, link, style}) => {
    return (
        <div>
            <Link to={link} className={style}>{text}</Link>
        </div>
    );
};
