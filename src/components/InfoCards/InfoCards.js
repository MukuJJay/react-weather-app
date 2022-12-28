import React from 'react'
import './infoCards.css'

const InfoCards = ({card, setCard, cardEnd}) => {
  const delCard = (id)=>{
    const updatedList = card.filter((element, index)=>{
      return index !== id
    })
    setCard(updatedList)
  }

  return (
    <ul className='cards'>
        {
          card.map(([temp, humidity, country, name, weather, iconId, time], ind)=>{
            return(
              <li className='card' key={ind} ref={cardEnd}>
              <h2 className='text fs-30 city'>{name}</h2>
              <p className='text fs-50'>{temp}&deg;C</p>
              <div className='info'>
                <span className='text fs-14'>Weather : <span className='weather'>{weather}</span></span>
                <span className='text fs-14'>Humidity : <span className='humidity'>{humidity}</span></span>
                <span className='text fs-14'>Country Code : <span className='country'>{country}</span></span>
                <span className='text fs-14'>Time : <span className='hours'>{time.getHours()}</span>:<span className='mins'>{time.getMinutes()}</span> IST</span>
              </div>
              <div className='weather-con'><img src={require(`../../assets/icons/${iconId}.png`)}alt='purple_background'/></div>
              <div className='del-con'><img src={require('../../assets/Delete.svg').default} alt="delete_icon" onClick={()=> delCard(ind)}/></div>
              </li>
            )
          })
        }
    </ul>
  )
}

export default InfoCards