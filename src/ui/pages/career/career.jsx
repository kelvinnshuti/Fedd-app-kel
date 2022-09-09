import React from "react";
import './career.css';
import Logo from '../../../assets/logo.png';
import {Link } from 'react-router-dom';
// import CareerMainImg from '../../../assets/Rectangle 79.png';
import logo2 from '../../../assets/logo2.png'

function Career(){
    return(
        <div className="career">
            <div className="career-first">
                <div className="navbar1">
                <div className="career-main-text">
                    <h1>career at feedapp</h1>
                    <p>
                        Pharetra vel ac malesuada id quam sit. Arcu, dictum nulla varius justo, etiam elit donec ultricies non. Est.    
                    </p>
                    <div className="career-main-text-btns">
                        <button className="apply">Apply</button>
                        <button className="click-here">click here for feedapp oppenings</button>
                    </div>
                </div>
                </div>
                <div className="navbar2">
                    <div className="logo">
                        <img className="logoimg" src={Logo} alt="" />
                        <h1>Feedapp</h1>
                    </div>
                    <div className="li">
                        <Link to=""> COMPANY</Link>
                        <Link to=""> INVESTOR</Link>
                        <Link to=""> BLOG</Link>
                        <Link to=""> CAREER</Link>
                    </div>
                </div>
                <div className="logo21">
                    <div className="imageq">
                        <img className="logo2" src={logo2} alt="logo2.png" />
                    </div>
                    <div className="values">
                        <h1>OUR VALUES</h1>
                        <p className="para">feedapp is a group of bold and passionate specialists who use different technologies to solve urgent problems.</p>
                        <p className="achieve">To achieve feedapp objectives of social and environmental progress, we select projects and establish goals while keeping six fundamental principles in mind:</p>
                        <div className="list-items">
                        <ul>
                            <li>Professionalism</li>
                            <li>Knowlegde</li>
                            <li>Rationality</li>
                            <li>Clear Community</li>
                            <li>Commitment to clients</li>
                        </ul>
                        </div>
                    </div>
        
                </div>
            </div>
            <div className="career-second">
                    
            </div>
        </div>
    );
}

export default Career;