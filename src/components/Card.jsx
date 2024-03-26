import style from './Card.module.css'


export default function Card(props) {
    return (
        <div className={style.card}>
            <h1>{props.title}</h1>
            <img src={props.image} alt="" width="50%" height = "auto"/>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    )
}