import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const {country, handleVisitedCountry, handleVisitedFlage} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlage={handleVisitedFlage}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetails;