import { useState } from "react"
import { useForm } from './hooks/useForm';

export const Formularios = () => {
    const { state, onChange } = useForm({
        email: 'miguel@gmail.com',
        password: '123456'
    });
    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control mb-2"
                placeholder="email"
                value={ state.email}
                onChange={ ({ target }) => onChange( target.value, 'email')}/>
            
            <input
                type="email"
                className="form-control"
                placeholder="password"
                value={ state.password}
                onChange={ ({ target }) => onChange( target.value, 'password')}/>
            
            <code>
                <pre>
                    { JSON.stringify(state, null, 2)}
                </pre>
            </code>
        </>
    )
}
