import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;

}


const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''

}

type Payload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout'}
    | { type: 'login', payload: Payload};

const authReducer = ( state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'logout':
            return {
                nombre: '',
                token: null,
                username: '',
                validando: false
            }
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'abc123',
                nombre,
                username 
            }   
            
    
        default:
            return state;
    }

}

export const Login = () => {
    const [ { validando, token, nombre }, dispatch] = useReducer( authReducer, initialState)
    
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
        
    }, [])

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: 'Miguel',
                username: ' pac007'
            }
        })
    }

    const logout = ( ) => {
        dispatch({type: 'logout'})
    }

    if ( validando ) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )    
    }
    return (
        <>
            <h3>Login</h3>   
            {
                ( token )
                 ? <div className="alert alert-success"> Autenticado...  { nombre }</div>   
                 : <div className="alert alert-danger">No autenticado... </div>
            }
               
            {
                ( token )
                    ? <button className="btn btn-danger" onClick={ logout }> Logout</button>
                    : <button className="btn btn-primary" onClick={login}> login </button>
            
            }   
            

        </>
    )
}
