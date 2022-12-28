import React from 'react'
import './header.css'


const Header = ({search, setSearch, card, setCard}) => {
  const cityAdd = async()=>{
    if(search){
      setSearch("")
      const apiJson = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`).then((res) => res.json())
      if(apiJson.name){
        const time = new Date((apiJson.dt*1000+19800000)-(apiJson.timezone*1000))
        const newArr = [apiJson.main.temp, apiJson.main.humidity, apiJson.sys.country, apiJson.name, apiJson.weather[0].main, apiJson.weather[0].icon, time]
        const found = card.some(elem => elem[3] === newArr[3])
        !found ? setCard([...card, newArr]) : alert("Already Added")
      }
      else{
        alert("Enter a valid city name")
      }
    }
    else{
      alert("Atleast enter something :(")
    }
  }

  const enterKeyDown = (e)=>{
    if(e.key ==='Enter'){
      cityAdd()
    }
  }

  return (
    <header className='header'>
        <h1 className='text fs-30'>Mukul's Weather App</h1>
        <div className='search-field'>
          <input className='search text fs-16' type='search' placeholder='Type and add city name' onChange={(event)=>{
          setSearch(event.target.value)
          }} value={search} onKeyDown={enterKeyDown}/>
          <button className='add-btn' type='submit' onClick={cityAdd}>+</button>
        </div>
    </header>
  )
}


export default Header