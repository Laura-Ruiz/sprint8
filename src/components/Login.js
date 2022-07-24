import React, { useState, useEffect } from "react";
import Signup from "./Signup";
import "../styles/signup.css"
import logoRegister from "../img/descarga.png"
import ValidateLogin from "./ValidationLogin";
import { useNavigate } from "react-router-dom";

export default function Login(props) {


  const [dataLogin, setDataLogin] = useState({
    emailLogin: "",
    passwordLogin: ""
  })


  const [userLogin, setUserLogin] = useState(
    () => {
      const initial = [];


      try {
        const data = localStorage.getItem("userLogin");
        return data ? JSON.parse(data) : initial
      } catch (e) {
        return initial
      }
    })

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
  }, [userLogin])


  function addNewUserLogin() {
    const newUSer = {
      emailLogin: dataLogin.emailLogin,
      passwordLogin: dataLogin.passwordLogin
    }
    setUserLogin(newUSer)
  }

  function handleChangeLogin(event) {
    const { name, value } = event.target
    setDataLogin(preValue => {
      return {
        ...preValue,
        [name]: value
      }
    })
  }


  const [clientFilter, setClientFilter] = useState([])
  const [isAuthenticated, setisAutheticated] = useState(null)
  const [errorLogin, setErrorLogin] = useState({})

  function handleClickLogin(event) {
    event.preventDefault()

    addNewUserLogin()
    setErrorLogin(ValidateLogin(dataLogin))

    filterClientList()
  }

  const navigate = useNavigate()

  function filterClientList(event) {

    const clienteFiltrado = [...props.clientList].filter(client => {
      return client.email.includes(dataLogin.emailLogin)
    })


    if (clienteFiltrado[0].password === dataLogin.passwordLogin) {
      setClientFilter([...clienteFiltrado])
      setisAutheticated(true)
      setTimeout(() => login(), 3000)
    } else {
      setisAutheticated(false)
    }
  }


  function login() {
    setisAutheticated(true)
    props.setisLoggedIn(true)
    navigate('/Starships')
  }

  function logout() {
    setisAutheticated(false)
    props.setisLoggedIn(false)
  }



  return (
    <div className="container-register">
      <form className="form-register">
        <img src={logoRegister}></img>

        <div>
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
    </div>
  );
}
