import React from 'react';
import './desktop-1.css';
import {Link} from "react-router-dom";

function Desktop1() {
    return (
        <div>
            <div className="navbar">
                <h1>Feedapp</h1>
                <ul className='nav-list'>
                    <li><a href="null">COMPANY</a></li>
                    <li><a href="null">FAQ</a></li>
                    <li><a href="null">BLOG</a></li>
                   <Link to="/Career"> <li><a href="null">CAREER</a></li></Link>
                    <li><a href="null">CONTACT US</a></li> 
                </ul>
            </div>
        </div>
    )
}

export default Desktop1;