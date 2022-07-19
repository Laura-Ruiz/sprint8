import React, { useState } from "react"
import "../styles/style.css"
export default function Starships(props) {
    console.log("props", props)


    return (
        <>
            {props.data.map((datum, index) => {
                const last = datum.url.split('/');
                const id = last[last.length - 2];

                return <div className="ships" key={`datum-${index}`}>
                    <a className="a_ship" href={`starships/${id}`}><p className="name">{datum.name.toUpperCase()}</p><p>{datum.model}</p></a>
                </div>
            }
            )}

        </>
    )
}