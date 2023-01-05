import HorseListCard from "../components/HorseListCard"
import useFetch from "../hooks/useFetch";
import hl from "../scss/HorseList.module.scss"

const HorseList = () => {

    const { data: horses, isLoading, error } = useFetch('http://localhost:8000/horses')

    return ( 
        
        <div className="content">

            <h1 className={hl.title}>
                Horses...
            </h1>

            <main className={hl.horseList}>   

                {isLoading && 
                    <p>Loading...</p>} 

                {error && 
                    <p>{error}</p>}

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
        </div>

     );
}
 
export default HorseList;