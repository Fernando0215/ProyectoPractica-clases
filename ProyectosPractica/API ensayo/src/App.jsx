import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [img, setImg] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((dog) => setImg(dog.message));
  }, []); 
  
  return (
    <div>
      <img src={img} alt="Imagen de perro" />
    </div>
  );
}

export default App
