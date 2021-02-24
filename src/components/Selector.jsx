import { AppContext } from '../context/AppContext.js';
import { useContext, useState } from 'react';

const Selector = () => {

    const dataContext = useContext(AppContext);

    const { countries, setPickCountry } = dataContext;

    const handleChange = (e) => {
        setPickCountry(e.target.value);
    }
    console.log(countries);
    // console.log(country);

    return (
        <select
            name="select"
            id="select"
            onChange={(e) => handleChange(e)}
        >
            {countries.map((country) => (
                <option value={country.country}>{country.country}</option>
            ))}
        </select>
    );
}

export default Selector;