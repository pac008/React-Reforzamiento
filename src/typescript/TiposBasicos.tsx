
export const TiposBasicos = () => {


    const nombre: string = "Miguel";
    const edad: number = 25;
    const estaActivo: boolean = true;

    const poderes = ['volar','respirar','correr'];
    return (
        <>
           <h3>Tipos Básicos</h3> 
            { nombre } - { edad } - { (estaActivo) ? 'Hola' : 'chao' }
            <br/>
            { poderes.join(', ')}
        </>
    )
}
