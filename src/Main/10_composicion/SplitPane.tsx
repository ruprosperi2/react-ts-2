import React from 'react';

function SplitPane(props: any) {
    return (
        <div>
            <div>
                {props.left}
            </div>
            <div>
                {props.right}
            </div>
        </div>
    )
}

export default SplitPane;