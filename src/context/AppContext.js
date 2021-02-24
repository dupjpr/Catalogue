import { createContext, useState, useEffect } from "react";



const AppContext = createContext();

const AppContextProvider = ({ children }) => {

    const url = 'http://api.airvisual.com/v2/countries?key=269ac124-c833-414b-94ca-4e196d627714'

    const [countries, setCountries] = useState([]);
    const [pickCountry, setPickCountry] = useState('NA');

    console.log(pickCountry);

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(data => setCountries([{country: "NA"},...data.data]));

    }, []);

    return (
        <AppContext.Provider value={{ countries, setPickCountry}}>
            {children}
        </AppContext.Provider>
    );
}


export { AppContext };
export default AppContextProvider;