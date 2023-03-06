import { Link } from "react-router-dom";
import './navbar.css';

import { AiOutlineHome, AiOutlineFileAdd, AiOutlineLogout } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

function Navbar() {
  


    return (
    <nav>
        <ul className="navbar">
            <li>
                <Link className="nav-link" to="/" exact="true"><AiOutlineHome id="home" /> </Link>
            </li>
            <li>
                <Link className="nav-link" to="/projects" exact="true" id="project">< FaTasks/> Projects</Link>
            </li>
            <li>
                <Link className="nav-link" to="/skills" exact="true" id="skill">< GiSkills/> Skills</Link>
            </li>

            <li>
                <Link className="nav-link" to="/projects/create" exact="true" id="project">< AiOutlineFileAdd/> Add</Link>
            </li>

            <button className="btn mt-2 ms-5" id="log-out"> <AiOutlineLogout /> Log Out</button>
        </ul>
    </nav>
    )
}

export default Navbar