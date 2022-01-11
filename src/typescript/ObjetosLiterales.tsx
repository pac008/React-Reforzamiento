interface Persona {
    nombre: string;
    apellido: string;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    ciudad: string;
};
export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombre: 'Miguel',
        apellido: 'Herrera',
        direccion: {
            pais: 'Francia',
            ciudad: 'Burdeos'
        }
    }
    return (
        <>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
