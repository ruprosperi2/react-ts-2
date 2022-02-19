import React from 'react';
import SplitPane from "./SplitPane";


function Contacts(){
    return(
        <h1>contactos</h1>
    )
}

function Chat(){
    return(
        <h1>mensajes</h1>
    )
}

function App() {
    return (
        <SplitPane
            left={
                <Contacts/>
            }
            right={
                <Chat/>
            }/>
    );
}

export default App;