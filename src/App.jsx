import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'

function App() {
  //      variable   setter        état initial
  const [countries, setCountries] = useState([]) // liste des pays
  const [region, setRegion] = useState("Europe") // région sélectionnée

  // API restcountries
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)  // va chercher les données de l'API
    .then((response) => response.json())  // conversion des données en JSON
    .then((data) => setCountries(data))   // la variable countries récupère le tableau de données
  }, [region])

  return (
    <>  {/* fragment */}
    {/* {
      countries.map((country) =>
      (<h2 className='text-light' key={country.cca2}> {country.name.common} </h2> ))  // each child in a list should have a unique "key" property
    } */}
    <div className="row gap-4 text-center justify-content-center">
      {
        countries.map((country) => (
        <CountryCard key={country.cca2} country={country} />))
      }
    </div>
    </>
  )
}

export default App
