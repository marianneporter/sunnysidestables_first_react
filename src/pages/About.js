import Nav from '../components/Nav'
import am from '../scss/about.module.scss'

const About = () => {
    return ( 
        <>
            <Nav/>
            <div className={am.content}>
            <h3>About Page</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora quae beatae repellendus animi accusamus voluptatem
                assumenda ut enim facilis quidem corporis deserunt rem 
                veritatis, cumque aliquid aperiam, sed dolores! Sapiente.
            </p>
            </div>

        </>
        
     );
}
 
export default About;