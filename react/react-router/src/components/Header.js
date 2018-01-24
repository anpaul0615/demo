import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            &nbsp; / &nbsp;
            <Link to="/about">About</Link>
            &nbsp; / &nbsp;
            <Link to="/posts">Posts</Link>
            <hr/>
        </div>
    );
};

export default Header;