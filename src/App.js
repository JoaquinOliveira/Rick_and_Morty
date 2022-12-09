import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = 'joliveira1987@hotmail.com';
  const password = 'Prueba12';
  const location = useLocation();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
    else {
      window.alert('Incorrect username/password')
    }
  }

useEffect(() => {
  !access && navigate('/');
}, [access]);

function logOut() {
  setAccess(false);
  navigate('/')
}
function onClose(id) {
  setCharacters(characters.filter((data) => data.id !== id)
  );
}

//es un objeto {} que dentro de eso tiene la props de location. {pathname:url}

function onSearch(character) {
  /* const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
}; */
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      if (data.name) {
        if (!characters.find(el => el.id == character))
          setCharacters((oldChars) => [...oldChars, data]);
        else
          window.alert('Ya se encuentra agregado el personaje con ese ID');
      }
      else {
        window.alert('No hay personajes con ese ID');
      }
    });

};

return (
  <div className={"App"} style={{ padding: "25px" }}>
    {location.pathname !== '/' && <Nav logOut={logOut} onSearch={onSearch} />} {/* puedo hacer un ternario */}
    <Routes>
      <Route path='/' element={<Form login={login} />} />
      <Route exact path='/home' element={<Cards characters={characters} onClose={onClose} />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/favorites' element={<Favorites />} />
      <Route exact path='/detail/:detailId' element={<Detail />} />
      <Route path='*' element={<Error />} />
    </Routes>
  </div>

);
}

export default App;
