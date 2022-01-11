import { useState } from "react"
import { useCounter } from '../hooks/useCounter';



export const ContadorHock = () => {
    
    const { valor, acumular } = useCounter(2);

    return (
        <>
            <h3>Contador<small> { valor }</small></h3>
            <button className="btn btn-primary"
            onClick={ () => acumular(1)}>
                +1
                </button>
                &nbsp;   
            <button className="btn btn-primary"
            onClick={ () => acumular(-1)}>
                -1
                </button>   
        </>
    )
}
