import Pokedex from "../Pokedex/Pokedex"

const Pokegame = ({data}) => {
  
  let hand1 = []
  let hand2 = [...data]

  while (hand1.length < hand2.length) {
    let randomIdx = Math.floor(Math.random() * hand2.length)
    let randomPokemon = hand2.splice(randomIdx, 1)[0]
    hand1.push(randomPokemon)
  }
  let exp1 = hand1.reduce((exp, data) => exp + data.base_experience, 0)
  let exp2 = hand2.reduce((exp, data) => exp + data.base_experience, 0)

  return ( 
    <div>
      <Pokedex 
        pokemon = {hand1}
        exp = {exp1}
        isWinner = {exp1 > exp2}
      />
      <Pokedex 
        pokemon = {hand2}
        exp = {exp2}
        isWinner = {exp2 > exp1}
      />
    </div>
  );
}

export default Pokegame;