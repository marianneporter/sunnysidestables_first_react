import nb from "./Navbar.module.scss"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navbar = () => {

    const [ toggle, setToggle ] = useState(false)

    const navigate = useNavigate()
   
    const toggleNav = () => {    
        setToggle(!toggle)
        console.log(toggle)
    }

    const navigateToRoute = (routeName) => {
        console.log('in navigate to route')
        setToggle(false)
        navigate(routeName)
    }

    return ( 
        <nav className={nb.navbar}>
            <div className={nb.siteNameArea}>
                <div className={nb.siteName}>
                    <FontAwesomeIcon icon="fa-solid fa-horse fa-lg" />
                    &nbsp; Sunnyside Stables
                </div>
                <div className={nb.navbarToggle} onClick={toggleNav}>
                    <span><FontAwesomeIcon icon="fa-solid fa-bars" /></span> 
                </div>  
            </div>        

            <ul className={nb.navItems + ( toggle ? ' ' + nb.menuActive : "") }>
                <li onClick={() => navigateToRoute('/')} className={nb.navItem} >Home</li>   
                <li onClick={() => navigateToRoute('/horseList')} className={nb.navItem}>Horse List</li>      
                <li onClick={() => navigateToRoute('/about')} className={nb.navItem}>About</li>  
            </ul >

        </nav>
        
     );



}
 
export default Navbar;