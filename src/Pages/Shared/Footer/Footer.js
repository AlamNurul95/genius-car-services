import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='my-5'><small>Copyright Protected @{year}</small></p>

        </footer>
    );
};

export default Footer;