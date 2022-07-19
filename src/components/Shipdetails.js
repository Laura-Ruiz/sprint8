import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function Shipdetails() {

    const params = useParams()

    const [ship, setShip] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${params.id}`).then(res => {
            setShip(res.data)
        })
    }, [])

    console.log("ship", ship)
    return (
        <div className="container">
            <img id="imgShip" src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}></img>
            <h1 className="name">{ship.name}</h1>
            <p>Description</p>
            <div id="infoShips">
                <p>Model: {ship.model}</p>
                <p>MGLT: {ship.MGLT}</p>
                <p>Cargo capacity: {ship.cargo_capacity}</p>
                <p>Consumables: {ship.consumables}</p>
                <p>Cost in credits: {ship.cost_in_credits}</p>
                <p>Crew: {ship.crew}</p>
                <p>Length: {ship.length}</p>
                <p>Manufacturer: {ship.manufacturer}</p>
                <p>Max atmosphering speed: {ship.max_atmosphering_speed}</p>
                <p>Passenger: {ship.passengers}</p>
                <p>Starship class: {ship.starship_class}</p>
            </div>
        </div>
    )
}