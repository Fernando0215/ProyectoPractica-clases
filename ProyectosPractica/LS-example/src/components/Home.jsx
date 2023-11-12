import React, { useState } from 'react';
import '../components/estilos.css';
import { Profile } from './Profile';


export const Home = () => {

  const [inputText, setInputText] = useState('');
  const [savedData, setSavedData] = useState(false);

  const HandleInputChange = (e) => {
    const text = e.target.value
    setInputText(text);
    console.log(inputText);

    if(text === ''){
      setSavedData(false);
    }
  }

  const saveData = () => {
    localStorage.setItem('nombre', inputText);
    setSavedData(true);
  }

  return (
    <div className='container'>
      <input
        className='input'
        onChange={HandleInputChange}
        placeholder='Ingresa tu nombre'
      />
      <button 
      className='button'
      onClick={ saveData }
      >
        Guardar
      </button>

      {(!!savedData) && <Profile/>}
    </div>
  )
}
