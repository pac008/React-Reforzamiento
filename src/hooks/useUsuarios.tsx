import { useRef, useState, useEffect } from 'react';
import { reqRes } from '../api/reqRes';
import { ReqResListado, Usuario } from "../interfaces/reqRes";


export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const paginaRef = useRef(0);

    useEffect(() => {
        // llamado API
        cargarUsuarios();
    }, [])
    
    
    const cargarUsuarios = async () => {
       
        try {

            const resp = await reqRes.get<ReqResListado>('/users', {
                params:{
                    page: paginaRef.current
                }
            })
            
            if ( resp.data.data.length > 0 ) {    
                setUsuarios( resp.data.data );
            } else { 
                paginaRef.current--
                alert( ' no hay más registros')
            }

        } catch (error) {
            console.log(error)   
        }
    }

    const paginaSiguiente = ( )  => {
        paginaRef.current++
        cargarUsuarios();

    }

    const paginaAnterior = ( ) => {
        if ( paginaRef.current > 1 ) {
            paginaRef.current--
            cargarUsuarios( );
        }
    }
    return { usuarios, paginaSiguiente, paginaAnterior };


}
