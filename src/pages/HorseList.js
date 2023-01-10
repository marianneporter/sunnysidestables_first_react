import HorseListCard from "../components/HorseListCard"
import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import hl from "../scss/HorseList.module.scss"
import Nav from "../components/Nav"


const HorseList = () => {

    const { data: horses, isLoading, error } = useFetch('http://localhost:8000/horses')

    return ( 
        
        <>
        <Nav />
        <h1 className={hl.title}>
            Horses...
        </h1>

        <main className={hl.horseList}>   

            {isLoading && 
                <p>Loading...</p>} 

            {error && 
                <div className={hl.error}> 
                    <p>{error}</p>
                    <Link to="/" className={`${hl.btn} ${hl.btnSecondary} `}>back to home page</Link>
                </div>
            }

            <div className={hl.horseCards}>
                {horses &&
                    horses.map(h=> {
                        return (
                            <div key={h.id}>
                                <HorseListCard horse={h} />                          
                            </div>
                        ) 
                    })
                }
            </div>
        </main>
        </>

     );
}
 
export default HorseList;