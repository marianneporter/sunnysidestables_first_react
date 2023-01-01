import nb from "./Navbar.module.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

    return ( 
        <nav className={nb.navbar}>
            <div className={nb.siteName}>
                 <FontAwesomeIcon icon="fa-solid fa-horse fa-lg" />
                 &nbsp; Sunnyside Stables
            </div>
            <span className={nb.navbarToggle} onClick="toggle()">
                <span><FontAwesomeIcon icon="fa-solid fa-bars" /></span> 
            </span>  
            <div className={nb.mobDividerLine}></div>    
            <ul className={nb.navItems}>
                <li className={nb.navItem}>
                    <Link to="/">Home</Link>                  
                </li>
                <li className={nb.navItem}>
                    <Link to="/horseList">Horse List</Link>                   
                </li>
                <li className={nb.navItem}>
                    <Link to="/about">About</Link>  
                </li>
            </ul>

        </nav>
        
     );


     
}
 
export default Navbar;