import {Tilt} from 'react-tilt'

import style from './App.module.css'
import Card from './components/Card'
import Menu from './components/Menu'
import img01 from "./assets/Imgs/img01.jpg"
import img02 from "./assets/Imgs/img02.jpg"
import img03 from "./assets/Imgs/img03.jpg"
import img04 from "./assets/Imgs/img04.jpg"
import img05 from "./assets/Imgs/img05.jpg"
import img06 from "./assets/Imgs/img06.jpg"
import img07 from "./assets/Imgs/img07.jpg"


const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function App() {
  return (
        <>
        <Menu/>
    <div className={style.section01}>
      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img01}
      text1="Peixe tal"
      text2="Mar tal"/>
      </Tilt>
      
      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img02}
      text1="Peixe tal"
      text2="Mar tal"/>  
      </Tilt>
 
      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img03}
      text1="Peixe tal"
      text2="Mar tal"/>   
      </Tilt>

      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img04}
      text1="Peixe tal"
      text2="Mar tal"/>   
      </Tilt>

      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img05}
      text1="Peixe tal"
      text2="Mar tal"/>   
      </Tilt>
      
      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img06}
      text1="Peixe tal"
      text2="Mar tal"/>   
      </Tilt>

      <Tilt options={defaultOptions}>
      <Card title="Peixe tal"
      image={img07}
      text1="Peixe tal"
      text2="Mar tal"/>   
      </Tilt>
    </div>
      </>
    
  )
}

export default App
