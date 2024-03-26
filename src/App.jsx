import './App.css'
import Card from './components/Card'
import img01 from "./assets/Imgs/img01.jpg"
import img02 from "./assets/Imgs/img02.jpg"
import img03 from "./assets/Imgs/img03.jpg"



function App() {

  return (
    <>
      <Card title="Paisagens"
      image={img01}
      text1="Paisagem Escura e Misteriosa"
      text2="Curitiba / PR"/>

      <Card title="Paisagens"
      image={img02}
      text1="Paisagem Clara e Convidativa"
      text2="Curitiba / PR"/>   

      <Card title="Paisagens"
      image={img03}
      text1="Paisagem Clara e Gelada"
      text2="Curitiba / PR"/>   
    </>
    
  )
}

export default App
