import React from 'react'
import { useState } from 'react'

import { SignIn } from './SignIn'
import '../style-sheets/ContainerLogin.css'

import imagen from '../images/Complement.png';
import { SignUp } from './SignUp';

export function ContenedorLogin() {
    const [seccionSignIn, setSeccionSignIn] = useState(true);

    let bienvenida = ""
    seccionSignIn ? (bienvenida = "¡Bienvenido de vuelta!") : bienvenida = "¡Bienvenido!"

    return (
        <div className='contenedor-login'>
            <button onClick={() => setSeccionSignIn(true)}>A</button>
            <div className='Bienvenida'>
                <h1>{bienvenida}</h1>
                <p>Nombre de la empresa</p>
            </div>
            <img src={imagen} className='imagen1'/>
            <SignIn isSignInVisible={seccionSignIn} setSignInVisible={setSeccionSignIn}/>
            {/*<SignUp />*/}
        </div>
    )
}