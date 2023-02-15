import { choice, remove } from '../../helpers';
import foods from '../../foods';

const Fruit = () => {
  let randomItem = choice(foods)
  let result = remove(foods, randomItem)
  let filteredArrayLength = result[1].length

  return ( 
    <div>
      <p>I'd like one {randomItem}</p>
      <p>Here you go {randomItem}</p>
      <p>Delicious, may I have another?</p>
      <p>I'm sorry, we're all out. We have {filteredArrayLength} other foods left.</p>
    </div>
  );
}

export default Fruit;