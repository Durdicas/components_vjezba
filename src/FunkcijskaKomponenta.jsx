import React from 'react'
import PropTypes from 'prop-types'


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
export function FunkcijskaKomponentaDruga ({title, ime, godine, children}) {
  return (
    <>
    <h1>FunkcijskaKomponenta2</h1>
    <p>Ovo je primjer funkcijske komponente napisane sintaksom stare, obične, declaration funkcije</p>
    <p>Ovo je primjer propsa u funkcijskoj komponenti:</p>
    <h2>{title}</h2>
    <p>{ime} će za 10 godina imati {godine + 10}</p>
    {children}
    </>
  )
}


FunkcijskaKomponentaDruga.propTypes = {
  title: PropTypes.string.isRequired,
  ime: PropTypes.string,
  godine: PropTypes.number,
  children: PropTypes.element
}


FunkcijskaKomponentaDruga.defaultProps = {
  godine: 30,
}


/*export function FunkcijskaKomponentaTreca ({title, ime, godine, children}) {
  return (
    <>
    <h1>FunkcijskaKomponenta2</h1>
    <p>Ovo je primjer funkcijske komponente napisane sintaksom stare, obične, declaration funkcije</p>
    <p>Ovo je primjer propsa u funkcijskoj komponenti:</p>
    <h2>{title}</h2>
    <p>{ime} će za 10 godina imati {godine + 10}</p>
    {}
    </>
  )
}
*/