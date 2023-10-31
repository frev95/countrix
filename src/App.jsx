import { useState, useEffect } from 'react'
import CountryCard from './CountryCard'
import RegionSelector from './RegionSelector'

function App() {
  //      variable   setter        état initial
  const [countries, setCountries] = useState([]) // liste des pays
  const [region, setRegion] = useState("europe") // région sélectionnée

  // API restcountries
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${region}`)  // va chercher les données de l'API
    .then((response) => response.json())  // conversion des données en JSON
    .then((data) => setCountries(data))   // la variable countries récupère le tableau de données
  }, [region])

  // return (
  //   <>  {/* fragment */}
  //   {/* {
  //     countries.map((country) =>
  //     (<h2 className='text-light' key={country.cca2}> {country.name.common} </h2> ))  // each child in a list should have a unique "key" property
  //   } */}
  //   <div className="row gap-4 text-center justify-content-center">
  //     {
  //       countries.map((country) => (
  //       <CountryCard key={country.cca2} country={country} />))
  //     }
  //   </div>
  //   </>
  // )

  return (
    <div className="App">
        <header>
            <h1 className="text-light text-center">Countrix</h1>
        </header>
        <div className="m-4 text-center">
            <RegionSelector onChange={setRegion} />  {/* spécifie que region est modifié après un changement avec le sélecteur */}
        </div>
        <div className="row gap-4 text-center justify-content-center">
            {countries.map((country) => (
                <CountryCard key={country.cca2} country={country} />
            ))}
        </div>
    </div>
  )
}

export default App
