import { useState, useEffect } from "react";
import axios from "axios";

const Deck = () => {
  

  const [deck, setDeck] = useState(null)
  const [cardsDrawn, setCardsDrawn] = useState([])

  useEffect(() => {
    const deckApi = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
    
    async function fetchDeck() {
      try {
        const config = {headers: {Accept: 'application/json'}}
        const res = await axios.get(deckApi, config)
        console.log('this is res', res);
        setDeck(res.data.deck_id)
      } catch(error) {
        console.log('this is an error', error)
      }
    }
    fetchDeck()
  }, [])
  
  async function fetchCard() {
    const cardApi = `https://deckofcardsapi.com/api/deck/${deck}/draw/`
    try {
      const config = {headers: {Accept: 'application/json'}}
      const res = await axios.get(cardApi, config)
      console.log('**********', res.data);
      setCardsDrawn([...cardsDrawn, res.data.cards[0]])
      console.log('%%%%%%%%%%%%%%',cardsDrawn);
    } catch(error) {
      console.log('this is an error', error)
    }
  }
  
  return ( 
    <div>
      <button onClick={() => fetchCard()}>GIMME A CARD</button>
      

    </div>
  );
}

export default Deck;