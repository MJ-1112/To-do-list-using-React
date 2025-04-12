import React, { useState } from 'react';

function Item(props) {
    const [check, setCheck] = useState(false);

    function handleCheck() {
        setCheck(true);
    }
    
    function handleUncheck() {
        setCheck(false);
    }
    
    return (
        <div>
            <li 
                onClick={handleCheck} 
                onDoubleClick={handleUncheck}
                style={{
                    textDecorationLine: check ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >
                {props.itemName}
            </li>
        </div>
    )
}

export default Item;