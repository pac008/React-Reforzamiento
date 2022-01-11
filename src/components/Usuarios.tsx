
import { Usuario } from '../interfaces/reqRes';
import { useUsuarios } from '../hooks/useUsuarios';


export const Usuarios = () => {

    const {usuarios, paginaSiguiente, paginaAnterior} = useUsuarios();
    const renderItem = ( { id, first_name, email, avatar }: Usuario) => {
        return (
            <tr key={ id.toString() }>
                <td><img src={avatar}
                         alt={first_name}
                         className="rounded"   
                     />
                 </td>
                <td> { first_name } </td>
                <td> { email }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios: </h3>        
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {  usuarios.map( renderItem ) }
                </tbody>
            </table>
            <button className="btn btn-primary"
                    onClick={ paginaAnterior }>
                Anteriores
            </button>
            &nbsp;
            <button className="btn btn-primary"
                    onClick={ paginaSiguiente }>
                Siguiente
            </button>
        </>

    )
}
