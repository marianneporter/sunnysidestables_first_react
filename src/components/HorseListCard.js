import hlc from "../scss/HorseListCard.module.scss"

import { Link } from "react-router-dom"
import OwnersNames from "./OwnersNames";

const HorseListCard = ( { horse } ) => {

    return (
        <div className={hlc.horseCard}>
            <h3 className={hlc.horseName}>{horse.name}</h3>
            <h6>Owned by: <OwnersNames owners={horse.owners} /></h6>
            <div className={hlc.imgArea}>
                <img src={horse.imageUrl} alt="No pic uploaded"/>
            </div>
            <div className={hlc.btnArea}>
                <Link to={`/horseDetail/${horse.id}`}
                      className={`${hlc.btn} ${hlc.btnPrimary}`}>
                    Details
                </Link>
            </div>
        </div>
    );
}
 
export default HorseListCard; 