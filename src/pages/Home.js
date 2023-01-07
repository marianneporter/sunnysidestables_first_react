import hm from "../scss/home.module.scss"
import { Link } from 'react-router-dom'
import usePathname from '../hooks/usePathname'


const Home = () => {
    
    const pathName = usePathname()
    console.log(pathName)

    return ( 
        <div className={hm.container}>
             <h1>Welcome to the Sunnyside Stables React Demo</h1>   
             <Link to={`/horseList`} className="btn btn-accent" >Enter Site</Link> 

        </div>          
     );
}
 
export default Home; 