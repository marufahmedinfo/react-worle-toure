import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitedFlage, setVisitedFlage] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);

    const handleVisitedCountry = country => {
        console.log('Add this to your visited country')
        // console.log(country)
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    };
    
    const handleVisitedFlage = (flag) => {
        // console.log(flag)
        const newFlage = [...visitedFlage, flag];
        setVisitedFlage(newFlage)
    }

    return (
        <div>
            <h3>Countries Added : {countries.length}</h3>
            <div>
                <h4>Visited Country : {visitedCountry.length}</h4>
                <ol>
                {
                    visitedCountry.map(country => <li key={country.cca2}>{country.name.common}</li>)
                }
                </ol>
            </div>
            <div className="flagContainer">
                {
                    visitedFlage.map((flag, idx)=><img key={idx} src={flag} alt="" />)
                }
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country
                     key={country.cca2}
                     handleVisitedCountry={handleVisitedCountry}
                     handleVisitedFlage={handleVisitedFlage}
                     country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;