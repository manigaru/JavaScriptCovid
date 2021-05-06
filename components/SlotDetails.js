import React from 'react';
import Slot from './Slot';

function SlotDetails({slots}) {
    if(slots != undefined && slots.length != 0) {
        return (
            <div>
                {
                    slots && slots.map((slt, key) => {
                        return (
                            <Slot key={key} {...slt}/>
                        )
                    })
                }
            </div>
        ) 
    } else if(slots != undefined && slots.length == 0) {
        return (
            <div>No Slots Available</div>
        )
    } else {
        return (
            null
        )
    }
}


export default SlotDetails