import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = ''
const background = (
  <img 
    className='background'
    alt='ocean'
    src='./images/ocean.jpg'/>
)

const images = []
for (const animal in animals) {
  images.push(
    <img 
      key={animal} 
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact} />
  )
};

function displayFact (e) {
  let selectedAnimal = e.target.alt
  const idx = Math.floor(Math.random() * animals[selectedAnimal].facts.length)
  const funFact = animals[selectedAnimal].facts[idx]
  document.getElementById('fact').innerHTML = funFact 
}

const showBackground = true

const animalFacts = (
  <div>
  <h1>{'' || 'Click an animal for a fun fact'}</h1>
  {showBackground && background}
  <div className='animals'>
    {images}
  </div>
  <p id='fact'></p>
  </div>
)

ReactDOM.render(
  animalFacts,
  document.getElementById('root')
)