import React from 'react'


// Funkcijska komponenta u obliku arrow funkcije
export const FunkcijskaKomponentaPrva = () => {
  return (
    <>
    <h1>FunkcijskaKomponenta1</h1>
    <p>Ovo je primjer funkcijske komponente napisane sintaksom arrow funkcije</p>
    </>
  )
}



//Funkcijska komponenta u obliku stare, obične declaration funkcije
export function FunkcijskaKomponentaDruga (props) {
  return (
    <>
    <h1>FunkcijskaKomponenta2</h1>
    <p>Ovo je primjer funkcijske komponente napisane sintaksom stare, obične, declaration funkcije</p>
    <p>Ovo je primjer propsa u funkcijskoj komponenti:</p>
    <h2>{props.title}</h2>
    </>
  )
}