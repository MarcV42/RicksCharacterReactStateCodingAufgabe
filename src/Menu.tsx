import {Link} from "react-router-dom";
import "./App.css"

export default function Menu() {
    return (

        <ul className="menu">
            <li>
            <Link to={"/"} >Home</Link>
            </li>
            <li>
                <Link to={"/Character"} >Character</Link>
            </li>

        </ul>)
}