import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios';
import "../styles/shipDetails.css"
import Pilots from "./Pilots";
import Films from "./Films";
// import imgDefault from "../img/error.jpg"

export default function Shipdetails() {

    const params = useParams()

    const [shipDetails, setShipDetails] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${params.id}`).then(res => {
            setShipDetails(res.data)
        })
    }, [])

    return (
        <div className="container-shipDetails">
            
            <img id="imgShip" alt="ships"
                src={`https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                }}
            />
            
            <div><h1 className="shipDetails-name">{shipDetails.name}</h1></div>
            <div id="infoShips">
                <p>Model: {shipDetails.model}</p>
                <p>MGLT: {shipDetails.MGLT}</p>
                <p>Cargo capacity: {shipDetails.cargo_capacity}</p>
                <p>Consumables: {shipDetails.consumables}</p>
                <p>Cost in credits: {shipDetails.cost_in_credits}</p>
                <p>Crew: {shipDetails.crew}</p>
                <p>Length: {shipDetails.length}</p>
                <p>Max atmosphering speed: {shipDetails.max_atmosphering_speed}</p>
                <p>Passenger: {shipDetails.passengers}</p>
                <p>Starship class: {shipDetails.starship_class}</p>
            </div>
            {Object.keys(shipDetails).length > 0 && <Pilots shipDetails={shipDetails} />}
            {Object.keys(shipDetails).length > 0 && <Films shipDetails={shipDetails} />}
        </div>
    )
}