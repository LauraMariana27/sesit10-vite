import Menu from './components/Menu'
import style from './Calc.module.css'
import { useState, useEffect } from 'react'
export default function Calc() {
    const [ numero1, setNumero1] = useState()
    const [ numero2, setNumero2] = useState()
    const [ respSoma, setRespSoma] = useState()
    const [ respSub, setRespSub] = useState()
    const [ respMulti, setRespMulti] = useState()
    const [ respDiv, setRespDiv] = useState()

    useEffect (()=>{
        if(numero1 !== undefined && numero2 !== undefined){
        setRespSoma(parseFloat(numero1) + parseFloat(numero2))
        setRespSub(parseFloat(numero1) - parseFloat(numero2))
        setRespMulti(parseFloat(numero1) * parseFloat(numero2))
        setRespDiv(parseFloat(numero1) / parseFloat(numero2))
        }
    }, [numero1, numero2])

    return(
        <>
        <Menu/>
        <div className={style.sectionCalc}>
            <h1>Cálculos</h1>
            <div>
                <label htmlFor="n1">Número 1:</label>
                <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>  
            </div>
            <div>
                <label htmlFor="n2">Número 2:</label>
                <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)}/>
            </div>
            <div>
            <div>
                <h1>Soma</h1>
                {respSoma}
            </div>
            <div>
                <h1>Sub</h1>
                {respSub}
            </div>
            <div>
                <h1>Multi</h1>
                {respMulti}
            </div>
            <div>
                <h1>Div</h1>
                {respDiv}
            </div>
            </div>
        </div>
        </>
    )
}