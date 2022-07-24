
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Starships from './components/Starship';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Shipdetails from './components/Shipdetails';
import Protected from "./components/Protected";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [starShips, setStarShips] = useState([])
  const [numPag, setNumPag] = useState(1)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    axios.get(`https://swapi.dev/api/starships/?page=${numPag}`).then(res => {
      setStarShips(preValor => {
        return [...preValor, ...res.data.results]
      })
      setLoading(false)
    })

  }, [numPag])


  const [clientList, setClientList] = useState(
    () => {
      const initial = [];


      try {
        const data = localStorage.getItem("clientList");
        return data ? JSON.parse(data) : initial
      } catch (e) {
        return initial
      }
    })

  useEffect(() => {
    localStorage.setItem("clientList", JSON.stringify(clientList));
  }, [clientList])

  const [isLoggedIn, setisLoggedIn] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/starships" element={<Starships starShips={starShips} setNumPag={setNumPag} numPag={numPag} loading={loading} />} /> */}
          <Route path='/starships'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Starships starShips={starShips} setNumPag={setNumPag} numPag={numPag} loading={loading} />
              </Protected>
            } />

          <Route path='/starships/:id'
            element={
              <Protected isLoggedIn={isLoggedIn}>
                <Shipdetails />
              </Protected>
            } />
          {/* <Route path="/starships/:id" element={<Shipdetails />} /> */}

          <Route path="/login" element={<Login clientList={clientList} setisLoggedIn={setisLoggedIn} />} />
          <Route path="/register" element={<Signup setClientList={setClientList} clientList={clientList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
