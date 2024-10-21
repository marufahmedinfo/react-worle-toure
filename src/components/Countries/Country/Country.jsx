
import { useState } from 'react';
import './Country.css'
import CountryDetails from '../../CountryDetails/CountryDetails';
const Country = ({country, handleVisitedCountry, handleVisitedFlage}) => {
    // console.log(country)
    // console.log(handleVisitedCountry)
    const {name,flags,area,population,cca3} = country;
    const [visited, setVisited] = useState(false);
    const handelVisited = () => {
        setVisited(!visited)
    };



    return (
        <div className={`country ${visited? "visited":"no-balid"}`}>
            <h2 style={{color: visited ? 'white': "black"}}>Cuntry Name : {name?.common}</h2>

            <img className='image' src={flags.png} alt="" />

            <h4>Poulation : {population}</h4>
            <h4>Area : {area}</h4>
            <h4>Code : {cca3}</h4>
            <button className='btn2' onClick={()=>handleVisitedCountry(country)}>markVisited</button>
            <br />
            <button onClick={()=>handleVisitedFlage(country.flags.png)}>Add Image</button>
            <br />

            <button className='btn1' onClick={handelVisited}>{visited ?'Visited':"Going"}</button>

            {visited ? `I visited Country ${name.common}`: `I Want to Visite ${name.common}`}
            <hr />
            <CountryDetails
             country={country}
             handleVisitedCountry={handleVisitedCountry}
             handleVisitedFlage={handleVisitedFlage}             
             ></CountryDetails>
            
        </div>
    );
};

export default Country;