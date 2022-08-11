import React, { useState, useEffect } from "react"
import axios from 'axios';
import "../styles/pilots.css"
export default function Pilots(props) {

    const shipDetailsPilots = props.shipDetails.pilots

    let idUrl = []

    if (shipDetailsPilots !== undefined) {

        idUrl = shipDetailsPilots.map(url => {
            const last = url.split('/');
            const id = last[last.length - 2];

            return id
        })
    }

    const [pilots, setPilots] = useState([])

    useEffect(() => {
        for (let id of idUrl) {
            setPilots([])
            axios.get(`https://swapi.dev/api/people/${id}`).then(res => {
                console.log(res)
                setPilots(preValor => {
                    return [...preValor, res.data]
                })
            })
        }
    }, [])

    return (
        <div >
            {pilots.length !== 0 && <><h1 className="title-pilots-films">PILOTS</h1>
                <div className="container-pilot-films">
                    {pilots.map((pilot, index) => {
                        const last = pilot.url.split('/');
                        const id = last[last.length - 2];
                        return <div className="pilot-film" key={`pilot-${index}`}>
                            <div id="container-img">
                                <img className="imgFilms-Pilots" alt="films images" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}></img>
                            </div>
                            <div className="overlay">
                                <div className="text">
                                    <p className="name">{pilot.name}</p>
                                    <br />
                                    <p>Birth Year: {pilot.birth_year}</p>
                                    <p>Gender: {pilot.gender}</p>
                                    <p>Height: {pilot.height}</p>
                                    <p>Mass: {pilot.mass}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </>}
        </div>
    )

}
