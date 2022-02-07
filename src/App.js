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

const Filter = ({ data, filtData, setFiltData }) => {
  if (data.length > 10) {
    return (
      <div>
        Too many matches, specify more
      </div>
    )
  }
  else if (data.length === 1) {
    return (
      <div>
        <h1>{data[0].name.common}</h1>
        <div>capital:    {data[0].capital} </div>
        <div>population: {data[0].population}</div>
        <Languages country={data[0]} />
        <Flag country={data[0]} />
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
      <Filter data={filtData} setFiltData={setFiltData} filtData={filtData} />
    </div>
  )
}

export default App