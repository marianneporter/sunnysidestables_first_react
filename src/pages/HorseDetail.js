import hd from '../scss/HorseDetail.module.scss'

import { Link, useParams } from 'react-router-dom'

import OwnersNames from '../components/OwnersNames'

import useFetch from "../hooks/useFetch"

const HorseDetail = () => {

    const { id } = useParams()

    const { data: horse, isLoading, error } = useFetch(`http://localhost:8000/horses/${id}`)

    return ( 

        <div className={hd.content}>
            { isLoading && 
                <p>Loading...</p>
            }

            { error && (
                <p>{error}</p>
            )} 

            { horse && (
                <div className={hd.horseDetailsCard}>
                    <h3>{horse.name}</h3>

                    <div className={hd.cardBody}>
                        <div className={hd.imgArea}>
                            <img src={horse.imageUrl} alt=""/>
                        </div> 

                        <div className={hd.detailLines}>
                            <div className={hd.detailLine}>
                                <div className={hd.detailTitle}>Height:</div>
                                <div className={hd.detailValue}>{horse.heightHands}</div>
                            </div>
                            <div className={hd.detailLine}>
                                <div className={hd.detailTitle}>Sex:</div>
                                <div className={hd.detailValue}>{horse.sex}</div>
                            </div>   
                            <div className={hd.detailLine}>
                                <div className={hd.detailTitle}>Colour:</div>
                                <div className={hd.detailValue}>{horse.colour}</div>
                            </div>  
                            <div className={hd.detailLine}>
                                <div className={hd.detailTitle}>DOB:</div>
                                <div className={hd.detailValue}>{horse.DOB}</div>
                            </div>    
                            <div className={ hd.detailLine + hd.ownerLine }>
                                <div className={hd.detailTitle}>Owned by:</div>
                                <div className={hd.detailValue}><OwnersNames owners={horse.owners} /></div>
                            </div>  
                        </div>
                    </div>
                    <div className={hd.btnArea}>
                        <Link to="/horseList" className="btn btn-primary">Back</Link>
                    </div>
                </div>
            )}

        </div>
    );
}
 
export default HorseDetail;