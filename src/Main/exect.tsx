import ReactDOM from "react-dom";
import React from "react";
// import Hello from './1_hola_mundo/Hello';
// import Welcome from './4_componentes_propiedades/Funcional/Welcome';
// import Welcome from './4_componentes_propiedades/Clase/Welcome';
// import Comment from './4_componentes_propiedades/Extraccion_Componentes/Comment';
// import Clock from './5_estados_ciclo_vida/Clock';
// import Form from './6_manejo_eventos/1_eventos_sinteticos/Form';
import Toogle from './6_manejo_eventos/1_eventos_sinteticos/Toogle';

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
            <Toogle/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default exect;
