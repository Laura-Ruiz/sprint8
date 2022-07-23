import React, { useState } from "react";
import Signup from "./Signup";
import "../styles/signup.css"
import logoRegister from "../img/descarga.png"
import ValidateLogin from "./ValidationLogin";

export default function Login(props) {
  console.log("propsLogin", props)

  const [dataLogin, setDataLogin] = useState({
    emailLogin: "",
    passwordLogin: ""
  })

  function handleChangeLogin(event) {
    const { name, value } = event.target
    setDataLogin(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }
  console.log("dataLogin", dataLogin)

  const [clientFilter, setClientFilter] = useState([])
  const [isAuthenticated, setisAutheticated] = useState(null)
  const [errorLogin, setErrorLogin] = useState({})

  function handleClickLogin(event) {
    event.preventDefault()
    setErrorLogin(ValidateLogin(dataLogin))

    filterClientList()
  }

  function filterClientList(event) {

    const clienteFiltrado = [...props.clientList].filter(client => {
      return client.email.includes(dataLogin.emailLogin)
    })

    console.log("clienteFiltrado", clienteFiltrado)

    if (clienteFiltrado[0].password === dataLogin.passwordLogin) {
      setClientFilter([...clienteFiltrado])
      login()
    } else {
      setisAutheticated(false)
    }
  }


  console.log("clientFilter", clientFilter)
  function login() {
    alert("usuario correcto")
    setisAutheticated(true)

  }

  function logout() {
    setisAutheticated(false)
  }

  return (
    <div className="container-register">
      <form className="form-register">
        <img src={logoRegister}></img>
        <div>
          {/* <label htmlFor="email"> ENTER YOUR EMAIL ADDRESS: </label> */}
          <input
            type="text"
            name="emailLogin"
            value={dataLogin.emailLogin}
            onChange={(e) => handleChangeLogin(e)}
            placeholder="Email Address"
          />
          {errorLogin.emailLogin && <p className="error">{errorLogin.emailLogin}</p>}
        </div>
        <div>
          {/* <label htmlFor="password"> ENTER YOUR PASSWORD: </label> */}
          <input
            type="password"
            name="passwordLogin"
            value={dataLogin.passwordLogin}
            onChange={(e) => handleChangeLogin(e)}
            placeholder="Password"
          />
          {errorLogin.passwordLogin && <p className="error">{errorLogin.passwordLogin}</p>}
        </div>

        <button type="submit" onClick={(e) => handleClickLogin(e)}>Login</button>
        <button onClick={logout}>Logout</button>
        {isAuthenticated === true ? (
          <p className="success">You are now logged in </p>
        ) : isAuthenticated === false ? (
          <p className="error">You are not registered</p>
        ) : ''}
      </form>

      {/* {clientFilter == "" ? <Signup/> : <Login/>} */}
    </div>
  );
}
