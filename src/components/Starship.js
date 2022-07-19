import React, { useState, useEffect, useCallback, useRef } from "react"
import "../styles/style.css"

import axios from 'axios';

export default function Starships(props) {
    console.log("props", props)

    function handleClick() {
        props.setNumPag(preValue => preValue + 1)

    }
    console.log(props.data)
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
            <button onClick={handleClick}>View more</button>

        </>
    )
}