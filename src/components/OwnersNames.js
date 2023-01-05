const OwnersNames = ( { owners }) => {

    const getFullOwnerName = (owner, index) => {
        let name = `${owner.firstName} ${owner.lastName}`
        if ((index + 2) < owners.length) {
            name += ", "
        } else if (index + 2 === owners.length) {
            name += ' and '
        }        
        return name;  
    }

    return (
        owners.map( (o, index) => {
            return (
                <span key={o.id}>
                   {getFullOwnerName(o, index)}                        
                </span>
            ) 
        })
    );
}
 
export default OwnersNames;