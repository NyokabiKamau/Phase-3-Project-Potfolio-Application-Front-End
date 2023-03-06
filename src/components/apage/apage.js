import { Link } from "react-router-dom";
import './apage.css';

import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';

function Apage() {

    return (
    <nav>
        <ul className="navbar">
            <li>
                <Link className="nav-link" to="/" exact="true"><AiOutlineHome id="home" /> </Link>
            </li>
            <li>
                <Link className="nav-link" to="/projects" exact="true" id="project">< FaTasks/> Projects</Link>
            </li>

            <button className="btn mt-2" id="log-out"> <AiOutlineLogout /> Log Out</button>
        </ul>
    </nav>
    )
}

export default Apage