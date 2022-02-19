import React, {useEffect, useState} from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
    return(
        <div>
            <TemperatureInput scale={'c'}/>
            <TemperatureInput scale={'f'}/>
        </div>
    );
}

export default Calculator;