
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './components/Home';
import Starships from './components/Starship';
import Shipdetails from './components/Shipdetails';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then(res => {
      setData(res.data.results)
    })
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/starships" element={<Starships data={data} />} />
          <Route path="/starships/:id" element={<Shipdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
