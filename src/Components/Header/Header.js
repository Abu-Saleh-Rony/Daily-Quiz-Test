import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to='/'> Home</Link>
            <Link to='/'> Topics</Link>
            <Link to='/'> Statistics</Link>
            <Link to='/'>Blog</Link>


        </nav>
    );
};

export default Header;