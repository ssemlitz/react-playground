import { useState, useEffect } from "react";
import axios from "axios";

const Deck = () => {
  

  const [deck, setDeck] = useState(null)
  const [cardsDrawn, setCardsDrawn = useState([])]

  useEffect(() => {
    const deckApi = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
    
    async function fetchDeck() {
      try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get(deckApi)
        console.log('this is res', res);
        setDeck(res)
      } catch(error) {
        console.log('this is an error', error)
      }
    }
  }, [])

  useEffect(() => {
    const cardApi = `https://deckofcardsapi.com/api/deck/${deck}/draw/`
    
    async function fetchCard() {
      try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get(cardApi)
        console.log('this is res', res);
      } catch(error) {
        console.log('this is an error', error)
      }
    }
    fetchCard()
  }, [])
  
  return ( 
    <div>
      <button>GIMME A CARD</button>

    </div>
  );
}

export default Deck;