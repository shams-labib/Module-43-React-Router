import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h5>This is Header</h5>
              <ul>
                {/* <a href="/">Home</a>
                <a href="/laptops">Laptop</a>
                <a href="mobiles">Mobiles</a>
                <a href=""></a> */}
                {/* Oporer mal gulo evabeo kaj korbe but amader nicher poddoti use kore kaj korle subodha  beshi */}

                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/mobiles'}>Mobiles</NavLink>
                <NavLink to={'/laptops'}>Laptop</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/users2'}>Users2</NavLink>
              </ul>
        </div>
    );
};

export default Header;