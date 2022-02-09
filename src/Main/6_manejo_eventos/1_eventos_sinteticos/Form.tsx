import React from "react";

function Form() {
    function handleSubmit(event: any) {
        event.preventDefault();
        alert("You clicked submit.");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;