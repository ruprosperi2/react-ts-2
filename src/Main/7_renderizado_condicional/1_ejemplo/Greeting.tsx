import React from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

function Greeting(props: any) {
    const isLoggeIn: boolean = true;
    if (isLoggeIn) {
        return <UserGreeting name={props.name}/>
    }
    return <GuestGreeting/>
}

export default Greeting;