import React from 'react';
import '../style-sheets/CaptchaPage.css'

type Props = {
    isCaptchaVisible: Boolean;
    setCaptchaVisible: Function;
}

let expresion = ""
let evaluacion = 0
const captchaExpresion = () => {
    const a = Math.round(Math.random()*49) + 1
    const b = Math.round(Math.random()*49) + 1
    const operador = Math.round(Math.random())
    
    if (operador == 0) {
        expresion = a.toString() + " + " + b.toString()
        evaluacion =  a + b
    } else {
        expresion = a.toString() + " - " + b.toString()
        evaluacion = a - b
    }
}

export function CaptchaPage(props: Props) {
    captchaExpresion()
    return (props.isCaptchaVisible) ? (
        <div className='fondo'>
            <div className='captcha'>
                <p>CAPTCHA</p>
                <p>{expresion}</p>
                <p>Ingrese su respuesta:</p>
                <input type="text" />
                <br/>
                <button className="boton-aceptar" onClick={() => props.setCaptchaVisible(false)}>
                    {evaluacion}
                </button>
            </div>
        </div>
    ) : null;
}