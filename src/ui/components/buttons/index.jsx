import { Link } from "react-router-dom";
import button1 from "../../../assets/button1.svg";
import button2 from "../../../assets/button2.svg";
// import button3 from "../../../assets/button3.svg";
import "./styles.css";
import opposite from '../../../assets/Button4.svg';
import group from '../../../assets/Group 3.svg'; 
import last from '../../../assets/Group 4.svg';
import reality from '../../../assets/Group 6.svg';
export default function Buttons(){
    return <div className="buttons-container">
        <Link className="button-item bottom-center" to=""><img alt="" src={button1} /></Link>
        <Link className="button-item bottom-1" to="/"><img alt="" src={opposite} /></Link>
        <Link className="button-item bottom-2" to="#"><img alt="" src={group} /></Link>
        <Link className="button-item bottom-3" to="#"><img alt="" src={last} /></Link>
        <Link className="button-item bottom-4"to="#"><img alt="" src={reality} /></Link>
        <Link className="button-item bottom-5" to="#"><img alt="" src={button2} /></Link>
    </div>
}