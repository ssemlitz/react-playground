import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import './Deck.css'
import { v4 as uuidv4 } from 'uuid';
import { randomNumber } from "../helpers";

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
  
  const cards = cardsDrawn.map(card => (
    <Card key={uuidv4()} name={card.code} img={card.image}/>
  ))

  return ( 
    <div >
      <button className="dealBtn" onClick={fetchCard}>GIMME A CARD</button>
      <div className="Deck">{cards}</div>
    </div>
  );
}

export default Deck;