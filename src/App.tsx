

import { Contador } from "./components/Contador";
import { ContadorHock } from "./components/ContadorHock";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Formularios } from "./Formularios";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";


 const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TypeScript React</h1>
      <hr/>
      {/* <TiposBasicos></TiposBasicos> */}
      {/* <ObjetosLiterales /> */}
      {/* <Contador /> */}
      {/* <ContadorHock /> */}
      {/* <Login /> */}
      {/* <Usuarios /> */}
      <Formularios />
    </div>
  )
}


export default App;