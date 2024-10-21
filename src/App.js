import './App.css';
import { useState } from "react";
import squirrelHungry from './img/squirrelHungry.png';
import squirrel1 from './img/squirrel1.jpg';
import pug from './img/pug.jpg';
import mouse from './img/mouse.jpg';
import moose from './img/moose.png';
import Window from './Components/Window/Window/Window';



function App() {
  const[modalActive, setModalActive] = useState(false);
  let animals = [
    {
      id: 1,
      img: squirrelHungry, 
    },
    {
      id: 2,
      img: squirrel1,
    },
    {
      id: 3,
      img: pug,
    },
    {
      id: 4,
      img: mouse,
    },
    {
      id: 5,
      img: moose,
    }
  ]

  return (
    <div className="App">
      <header className='header'>
      <p className='font'>Внезапный факт</p>
        <div className='container'>
        {animals.map(elem => (
              <button className='open' key={elem.id} onClick={()=> setModalActive(true)}>
                 Открой меня
              </button>
        ))}
        </div>
        <Window active={modalActive} setActive={setModalActive}>
          
        </Window>
                 
    </header>
    </div>
  );
}

export default App;
