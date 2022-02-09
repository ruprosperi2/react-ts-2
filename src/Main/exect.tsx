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
import LoginControl from './7_renderizado_condicional/2_ejemplo/LoginControl';

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
            <LoginControl/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default exect;
