import React from 'react';
import { useState } from 'react'

import '../style-sheets/SignIn.css';
import { CaptchaPage } from './CaptchaPage';

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

type Props = {
    isSignInVisible: Boolean;
    setSignInVisible: Function;
}

export function SignIn(props: Props) {
    const [paginaCaptcha, setPaginaCaptcha] = useState(false);

    return (props.isSignInVisible) ? (
        <div className="sign-in">
            <h1> Inicia sesión </h1>
            {/*<div>
                <FontAwesomeIcon icon={faGoogle} style={{marginRight: "20px"}}/>
                <FontAwesomeIcon icon={faFacebook}/>
            </div>*/}
            <input className='writingSpace' placeholder='Ingrese su usuario'/>
            <input className='writingSpace' placeholder='Ingrese su contraseña'/>
            <a className='link1' href='#' style={{display: "flex" , margin:"0 40px"}}>¿Olvidaste tu contraseña?</a>
            <button className='button1' onClick={() => setPaginaCaptcha(true)}>
                Ingresar
            </button>
            <div className='seccion-registrate'>
                <span className='link1'>¿No tienes una cuenta?</span>
                <a className='link1' href='#' onClick={()=>props.setSignInVisible(false)}> Registrate</a>
            </div>
            <CaptchaPage isCaptchaVisible={paginaCaptcha} setCaptchaVisible={setPaginaCaptcha} />
        </div>
    ) : null;
}