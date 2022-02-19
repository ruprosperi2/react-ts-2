import ReactDOM from "react-dom";
import React from "react";

// import Hello from './1_hola_mundo/Hello';
// import Welcome from './4_componentes_propiedades/Funcional/Welcome';
// import Welcome from './4_componentes_propiedades/Clase/Welcome';
// import Comment from './4_componentes_propiedades/Extraccion_Componentes/Comment';
// import Clock from './5_estados_ciclo_vida/Clock';
// import Form from './6_manejo_eventos/1_eventos_sinteticos/Form';
// import Toogle from './6_manejo_eventos/1_eventos_sinteticos/Toogle';
// import Greeting from './7_renderizado_condicional/1_ejemplo/Greeting';
// import LoginControl from './7_renderizado_condicional/2_ejemplo/LoginControl';
// import listItems from './8_listas/ListItems';
// import BoilingVerdict from './9_levantando_estado/1_iteracion/BoilingVerdict'
// import Calculator from './9_levantando_estado/1_iteracion/Calculator'
// import WelcomeDialog from './10_composicion/WelcomeDialog';
// import App  from './10_composicion/App'
// import Example from "./12_Hooks/Example";
// import BoilingVerdict from "./12_Hooks/1_levantando_estado/BoilingVerdict";
// import Calculator from "./12_Hooks/1_levantando_estado/Calculator";
// import Example2 from "./12_Hooks/Example2";
// import Example3 from "./12_Hooks/Example3";
// import Counter from "./13_api_hooks/useState/Counter";
import Counter from "./13_api_hooks/useReducer/Counter";



// const info: object = {
//     user: {
//         name: 'Ruben',
//         avatarUrl: 'https://assets-es.imgfoot.com/media/cache/1200x675/cristiano-ronaldo-colere.jpg'
//     },
//     text: 'Hi guys'
// }

function exect() {
    ReactDOM.render(
        <React.StrictMode>
            <Counter/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default exect;
