import React, { useState, useEffect } from 'react'

export const Profile = () => {

    const [nombre, setNombre] = useState('')

    const getData = () => {
        return localStorage.getItem('nombre');
    }
useEffect(() => {
    setNombre(getData());
}, []);
  return (
    <div>
        <h2>Hola { nombre }</h2>
    </div>
  )
}
