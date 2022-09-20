import React from "react";
import './career.css';
import Logo from '../../../assets/logo.png';
import {Link } from 'react-router-dom';
// import logo2 from '../../../assets/logo2.png'
import button1 from "../../../assets/button1.svg";
import button2 from "../../../assets/button2.svg";
import opposite from '../../../assets/Button4.svg';
import group from '../../../assets/Group 3.svg';
import last from '../../../assets/Group 4.svg';
import reality from '../../../assets/Group 6.svg';


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
                        {/* <img className="logo2" src={logo2} alt="logo2.png" /> */}
                        <Link className="button-item bottom-center" to=""><img alt="" src={button1} /></Link>
                        <Link className="button-item bottom-1" to="/"><img alt="" src={button2} /></Link>
                        <Link className="button-item bottom-2" to="#"><img alt="" src={opposite} /></Link>
                        <Link className="button-item bottom-3" to="/"><img alt="" src={group} /></Link>
                        <Link className="button-item bottom-4" to="#"><img alt="" src={reality} /></Link>
                        <Link className="last" to="#"><img alt="" src={last} /></Link>
                        {/* <Link className="button-item bottom-4"to="#"><img alt="" src={reality} /></Link> */}
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
            {/* <div className="career-second">
                    
            </div> */}
        </div>
    );
}

export default Career;