import React from "react";
import './about.css';
import Desktop1 from "../../components/desktop-1/desktop-1";
import coolPic from '../../../assets/illustration.png';
import laptop from '../../../assets/Group 352 1 (1).png';
import Vector from '../../../assets/Vector2.svg';
import person from '../../../assets/Group 368.svg';
import leader from '../../../assets/Vector 3.svg';
import rational from '../../../assets/Vector 4.svg';
import know from '../../../assets/Vector 5.svg';




function About() {
    return(
        <>
            <div className="about-top-section">
                <Desktop1 />
                <div className="about-content">

                    <div className="purpose">
                        <div className="purpose-text">
                            <h1>OUR PURPOSE</h1>
                            <h4>Providing Secure Food and Sustainable Agriculture</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias optio voluptatibus rem eius ea nobis facilis, quam quo corporis cum accusamus deleniti in quibusdam laborum possimus. Illum repellendus doloribus delectus iure minus dolorem sunt asperiores quae, cupiditate nisi placeat. Molestias perspiciatis impedit iusto unde obcaecati repellendus natus deserunt dolor delectus!
                            </p>
                        </div>
                        <div className="purpose-img">
                            <img src={coolPic} alt="" />
                        </div>
                    </div>

                    <div className="values">
                        <h1>OUR VALUES</h1>
                        <div className="values-cards">
                            <div className="value-card">
                                <h4>Professionalism</h4>
                                <img src={person} alt="" />
                            </div>
                            <div className="value-card">
                                <h4>Knowledge</h4>
                                <img src={know} alt="" />
                            </div>
                            <div className="value-card">
                                <h4>Rationality</h4>
                                <img src={rational} alt="" />
                            </div>
                            <div className="value-card">
                                <h4>Clear communication</h4>
                                <img src={Vector} alt="" />
                            </div>
                            <div className="value-card">
                                <h4>Commitment</h4>
                                <img src={leader} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="about-middle-content">

            <div className="history">
                <img src={laptop} alt="" />
                <div className="history-text">
                    <h1>OUR HISTORY</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt quod rem accusantium libero quia nemo? Explicabo eligendi cumque tempore quidem dolores dolor necessitatibus aliquam error aut perspiciatis a, saepe qui animi quam illo non officiis dignissimos sapiente nihil deserunt neque, vero magni et. Qui, quaerat! Quod excepturi totam sapiente enim consectetur ea sunt? Rerum, magnam.</p>
                </div>
            </div>
            <div className="documents">
                <h1>OUR DOCUMENTS</h1>
                <div className="documents-cards">
                    <div className="document-card">
                        <p>Vivamus Amet At Ac Arci Accumsan Velit Eget in. Vel Mus Posuere Sollicitudin Habitant.</p>
                        <a href="null">Download</a>
                    </div>
                    <div className="document-card">
                        <p>Vivamus Amet At Ac Arci Accumsan Velit Eget in. Vel Mus Posuere Sollicitudin Habitant.</p>
                        <a href="null">Download</a>
                    </div>
                    <div className="document-card">
                        <p>Vivamus Amet At Ac Arci Accumsan Velit Eget in. Vel Mus Posuere Sollicitudin Habitant.</p>
                        <a href="null">Download</a>
                    </div>
                </div>
            </div>

            </div>
        </>
    )
}

export default About;