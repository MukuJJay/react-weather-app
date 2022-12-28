import { useEffect, useState, useRef } from "react";
import Header from "./components/Header/Header";
import InfoCards from "./components/InfoCards/InfoCards";


function App() {
  const [search, setSearch] = useState()
  const [card, setCard] = useState([])
  const cardEnd = useRef()

  useEffect(()=>{
    cardEnd.current?.scrollIntoView()
  }, [card])

  return (
    <div className="bg">
      <div className="container">
        <Header search={search} setSearch={setSearch} card={card} setCard={setCard}/>
        <InfoCards card={card} setCard={setCard} cardEnd={cardEnd}/>
      </div>
    </div>
  );
}

export default App;
