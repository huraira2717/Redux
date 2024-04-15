// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="logo">
                    <img src="https://www.internee.pk/images/logo.webp" alt="Logo 1" />
                </div>
                <div className="menu">
                <div>

                    <ul>
                    <h3 className='text-white font-semibold text-2xl text-center mb-6'>Games</h3>

                        <li><a href="#"> Item 1</a></li>
                        <li><a href="#"> Item 2</a></li>
                        <li><a href="#"> Item 3</a></li>
                    </ul>
                    </div>
                    <div>
                    <ul>
                    <h3 className='text-white font-semibold text-2xl text-center mb-6'>Games</h3>

                        <li><a href="#"> Item 4</a></li>
                        <li><a href="#"> Item 5</a></li>
                        <li><a href="#"> Item 6</a></li>
                    </ul>
                    </div>
                    <div>

                    <ul>
                    <h3 className='text-white font-semibold text-2xl text-center mb-6'>Games</h3>

                        <li><a href="#"> Item 7</a></li>
                        <li><a href="#"> Item 8</a></li>
                        <li><a href="#"> Item 9</a></li>
                    </ul>
                    </div>
                </div>
                <div className="logo">
                    <img  src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png" alt="Logo 2" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
