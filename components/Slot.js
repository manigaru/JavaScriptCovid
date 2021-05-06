import React from 'react'
function Session(props) {
    return (
        <div>
            <div>Date: {props.date}</div>
            <div>Capacity: {props.available_capacity}</div>
            <div>vaccine: {props.vaccine}</div>
        </div>
    )
}
export default function Slot(props) {

    return (
        <div>
            <div>
                <div>{props.name}</div>
                <div>{props.address}</div>
            </div>
            <div>
                {
                    props.sessions && props.sessions.map((s, key) => {
                        return (
                            <Session key={key} {...s}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

