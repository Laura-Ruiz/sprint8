import React, { useState, useEffect } from "react"
import Validate from "./ValidationRegister"
import { Link } from "react-router-dom"
import "../styles/signup.css"
import logoRegister from "../img/descarga.png"
export default function Signup(props) {
    console.log("clientList", props.clientList)

    const [isRegister, setIsRegister] = useState(false)

    const [dataRegister, setdataRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // showPassword: false,
        // acceptConditions: false
    })

    function handleChangeRegister(event) {
        const { name, value, type, checked } = event.target
        setdataRegister(preData => {
            return {
                ...preData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    const [errors, setErrors] = useState({})

    function handleClick(event) {
        setErrors(Validate(dataRegister))
        // addNewClient()

        let validation = Validate(dataRegister)
        if (Object.entries(validation).length !== 0) {
            event.preventDefault()
        } else {
            setIsRegister(true)
            addNewClient()
        }
    }

    function addNewClient() {
        const newClient = {
            firstName: dataRegister.firstName,
            lastName: dataRegister.lastName,
            email: dataRegister.email,
            password: dataRegister.password,
            //   showPassword: false,
            //   acceptConditions: false
        }
        props.setClientList([newClient, ...props.clientList])

    }

    return (
        <div className="container-register">

            <form className="form-register">
                <img src={logoRegister}></img>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        value={dataRegister.firstName}
                        onChange={handleChangeRegister}
                        placeholder="First Name"
                    />
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="lastName"
                        value={dataRegister.lastName}
                        onChange={handleChangeRegister}
                        placeholder="Last Name"
                    />
                    {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        value={dataRegister.email}
                        onChange={handleChangeRegister}
                        placeholder="Email Address"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        value={dataRegister.password}
                        onChange={handleChangeRegister}
                        placeholder="Password"
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                {/* <div>
                    <input
                        type="checkbox"
                        id="showPassword"
                        checked={dataRegister.showPassword}
                        name="showPassword"
                        onChange={handleChangeRegister}

                    />
                    <label htmlFor="showPassword">Show password</label>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="acceptConditions"
                        checked={dataRegister.acceptConditions}
                        name="acceptConditions"
                        onChange={handleChangeRegister}
                    />
                    <label htmlFor="acceptConditions">Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</label> */}
                {/* </div> */}
                <button type="submit" onClick={(e) => handleClick(e)}>Create Account</button>
                <p>Already have an account?<Link to="/login" >Sign In</Link></p>
                {isRegister ? (
                    <p className="success"> Registration Successful! </p>
                ) : (
                    ""
                )}
            </form >
        </div >
    )
}