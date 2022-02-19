import React, {useState} from "react";
import BoilingVerdict from "./BoilingVerdict";

interface ScaleNameInterface {
    [char: string]: string
}

const scaleNames: ScaleNameInterface = {
    c: 'Celsius',
    f: 'Fahrenheit'
};


function TemperatureInput(props:any) {
    const [temperature, setTemperature] = useState<string>('')

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = event.target.value;
        setTemperature(temp);

    }

    const scale:string = props.scale;

    return (
        <fieldset>
            <legend>Enter temperature in {scaleNames[scale]}:</legend>
            <input value={temperature}
                   onChange={handleChange}/>
        </fieldset>
    );
}

export default TemperatureInput