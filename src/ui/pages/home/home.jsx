import React from 'react';
import './home.css';
import Desktop1 from '../../components/desktop-1/desktop-1';
// import Illustration from '../../../assets/illustration.png';
import instagram from '../../../assets/instagram.png';
import linkedin from '../../../assets/linkedin.png';
import twitter from '../../../assets/twitter.png';
import Card from '../../components/card-section/cards';
import bgImage from '../../../assets/Rectangle18.png';
import bgImage1 from '../../../assets/Rectangle 19.png';


const style={
    backgroundImage:`url(${bgImage})`

}

const styles = {
    backgroundImage: `url(${bgImage1})`
}
// const card2={
//     backgroundImage: ,url()` 
// }

function Home(){
    return(
        
        <div className='Home'>
            
            <div className="container">
                <div className="section">
                    <p>Career at FeedApp</p>
                    <button>Login</button>
                    <div className='header'>
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="home-first">
                    <Desktop1 />
                    <div className='mission-text'>
                        <p className='mission'>Our Mission</p>
                        <p className='description'>
                            Providing secure food 
                            and  sustainable agriculture
                        </p>
                    </div>
                    {/* <Card button="Go to careers" title="Our team is expanding"description="Molestie mattis ultrices congue bibendum rhoncus nunc." /> */}
                    <div className="cards">
                        
                        <Card button="PROJECTS" title="Venenatis mattis pulvinar lectus ." description="Malesuada egestas nam cursus massa. Cum iaculis dignissim enim eget est. Id neque, pretium ultricies tortor, tincidunt consectetur id. " more="Learn More" />
                        <Card button="OUR TEAM IS EXPANDING" description="Molestie mattis ultrices congue bibendum rhoncus nunc. " more="Go to careers" style={style}/>
                        <Card button="News"description="Molestie mattis ultrices congue bibendum rhoncus nunc. "more="View more" style={styles}/>
                    </div>
                </div>
                
            </div>
            <div className="home-second">
                
            </div>
            <div className="home-third">

            </div>
            <div className="home-forth">
                
            </div>
        
        </div>
    );
}

export default Home;