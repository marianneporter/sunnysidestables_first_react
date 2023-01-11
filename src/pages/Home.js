import hm from "../scss/pages/home.module.scss"
import { Link } from 'react-router-dom'

const Home = () => {
    
    return ( 
        <div className={hm.container}>
             <h1>Welcome to the Sunnyside Stables React Demo</h1>   
             <Link to={`/horseList`} className={`${hm.btn} ${hm.btnAccent}`} >Enter Site</Link> 

        </div>          
     );
}
 
export default Home; 