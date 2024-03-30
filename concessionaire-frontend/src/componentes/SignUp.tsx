import React from 'react';
import { useState } from 'react'

import '../style-sheets/SignUp.css'

export function SignUp() {
    return (
        <div className='sign-up'>
            <h1> Crea una cuenta </h1>
            <section>
                <input placeholder='Ingrese su usuario'/>
                <input placeholder='Ingrese su Fotografia'/>
                <input placeholder='Ingrese su Tipo de identificacion'/>
                <input placeholder='Ingrese su No. de identificacion'/>
                <input placeholder='Ingrese sus apellidos'/>
                <input placeholder='Ingrese sus nombres'/>
                <input placeholder='Ingrese su tipo de usuario'/>
                <input placeholder='Ingrese su login'/>
                <input placeholder='Ingrese su contraseña'/>
                <input placeholder='Ingrese su genero'/>
                <input placeholder='Ingrese su direccion'/>
                <input placeholder='Ingrese su celular'/>
            </section>
        </div>
    )
}
