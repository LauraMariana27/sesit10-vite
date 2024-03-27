import Menu from './components/Menu'
import style from './Calc.module.css'
export const Calc = () => {
    return(
        <>
        <Menus/>
        <div className={style.sectionCalc}>
            <h1>Cálculos</h1>
        </div>
        </>
    )
}