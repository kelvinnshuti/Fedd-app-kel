import './signin.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../components1/Navbar/Navbar';

export default function signin(){
    return(
        <div className="signin">
            <div className="sign-first">
                <Navbar/>
                <div className="s-f-f">
                    <h1>Log in</h1>
                    <form action="">
                        <label htmlFor="">Email
                            <input type="text" />
                        </label>
                        <label htmlFor="">Password
                            <input type="password" />
                        </label>
                        <span className='p-n'>I Forgot My Password</span>
                        <button className='but' type="submit">Login</button>
                    </form>
                    <p>Don't have an account?<Link to=""> Sign Up</Link></p>
                    <p className='bot'>Feedapp 2022  .Terms and Conditions</p>
                </div>
            </div>
        </div>
    );
}