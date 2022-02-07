import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Languages = ({ country }) => {
  const langKeys = Object.keys(country.languages)
  return (
    <div>
      <h3>languages</h3>
      <ul>
        {langKeys.map((key) => <li key={key}> {country.languages[key]} </li>)}
      </ul>
    </div>
  )
}

const ShowButton = ({ country, filtData, setFiltData }) => {
  const handleShowClick = (event) => {
    const spec = filtData.filter((country) => (country.name.common == event.target.name))
    setFiltData(spec)
  }

  return (
    <button name={country.name.common} onClick={handleShowClick}>show</button>
  )
}

const Flag = ({ country }) => {
  return (
    <div>
      <img src={country.flags.png}></img>
    </div>
  )
}

const Weather = ({ city_name, api_key }) => {
  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}&units=metric`).then((resp) => {
      setWeather(resp.data);
    })
  }, [])

  if (Object.keys(weather).length > 0) {
    return (
      <div>
        <h2>{`Weather in ${city_name}`}</h2>
        <div><b>temperature:</b> {weather.main.temp} C</div>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
        <div><b>wind: </b>{weather.wind.speed} m/s direction {weather.wind.deg} deg</div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>{`Weather in ${city_name}`}</h2>
        <h3>Not available</h3>
      </div>
    )
  }
}

const Filter = ({ data, filtData, setFiltData, api_key }) => {
  if (data.length > 10) {
    return (
      <div>
        Too many matches, specify more
      </div>
    )
  }
  else if (data.length === 1) {
    const city_name = data[0].capital
    return (
      <div>
        <h1>{data[0].name.common}</h1>
        <div>capital:    {data[0].capital} </div>
        <div>population: {data[0].population}</div>
        <Languages country={data[0]} />
        <Flag country={data[0]} />
        <Weather api_key={api_key} city_name={city_name} />
      </div>
    )

  } else {
    return (
      <div>
        {/* {data.map((country) => <div key={country.cca2} >{country.name.common}</div>)} */}
        {data.map((country) => <div key={country.cca2}>{country.name.common}  <ShowButton country={country} setFiltData={setFiltData} filtData={filtData} /> </div>)}
      </div>
    )
  }
}

const App = (props) => {
  const api_key = process.env.REACT_APP_API_KEY
  const [data, setData] = useState([])
  const [filtData, setFiltData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((resp) => {
      setData(resp.data);
      setFiltData(resp.data)
    })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
    const filtered = data.filter(
      (country) => {
        return country.name.common.toLowerCase().trim().includes(search.toLowerCase().trim())
      }
    )
    setFiltData(filtered)
  }

  return (
    <div>
      find countries <input onChange={handleChange}></input>
      <Filter data={filtData} setFiltData={setFiltData} filtData={filtData} api_key={api_key} />
    </div>
  )
}

export default App