import React from 'react';

function FancyBorder(props: any) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default FancyBorder;