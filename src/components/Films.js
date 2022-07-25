import React, { useState, useEffect } from "react"
import axios from 'axios';

export default function Starships(props) {



    const shipDetailsFilms = props.shipDetails.films
    //Poner dentro de useEffect¿?
    let idUrl = []

    if (shipDetailsFilms !== undefined) {

        idUrl = shipDetailsFilms.map(url => {
            const last = url.split('/');
            const id = last[last.length - 2];
            return id
        })
    }


    const [films, setFilms] = useState([])

    useEffect(() => {
        setFilms([])
        for (let id of idUrl) {
            axios.get(`https://swapi.dev/api/films/${id}`).then(res => {
                setFilms(preValor => {
                    return [...preValor, res.data]
                })
            })
        }
    }, [])

    return (
        <div>
            {films.length !== 0 &&
                <>
                    <h1 className="title-pilots-films" >FILMS</h1>
                    <div className="container-pilot-films">
                        {films.map((film, index) => {
                            const last = film.url.split('/');
                            const id = last[last.length - 2];
                            return <div className="pilot-film" key={`film-${index}`}>
                                <img className="imgFilms" src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}></img>
                                <p>Title: {film.title}</p>
                                <p>Episode: {film.episode_id}</p>
                                <p>Director: {film.director}</p>
                                <p>Release data: {film.release_date}</p>
                                <p>Producer: {film.producer}</p>
                            </div>
                        })}
                    </div>
                </>}
        </div>
    )
}