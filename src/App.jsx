import {Tilt} from 'react-tilt'

import style from './App.module.css'
import Card from './components/Card'
import img01 from "./assets/Imgs/img01.jpg"
import img02 from "./assets/Imgs/img02.jpg"
import img03 from "./assets/Imgs/img03.jpg"

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
    <div className={style.section01}>
      <Tilt options={defaultOptions}>
      <Card title="Paisagens"
      image={img01}
      text1="Paisagem Escura e Misteriosa"
      text2="Curitiba / PR"/>
      </Tilt>
      
      <Tilt options={defaultOptions}>
      <Card title="Paisagens"
      image={img02}
      text1="Paisagem Clara e Convidativa"
      text2="Curitiba / PR"/>  
      </Tilt>
 
      <Tilt options={defaultOptions}>
      <Card title="Paisagens"
      image={img03}
      text1="Paisagem Clara e Gelada"
      text2="Curitiba / PR"/>   
      </Tilt>

    </div>
    
  )
}

export default App
