import './App.css'
import { FunkcijskaKomponentaPrva } from './FunkcijskaKomponenta'
import { FunkcijskaKomponentaDruga } from './FunkcijskaKomponenta'
import  KlasnaKomponenta   from './KlasnaKomponenta'
//import { FunkcijskaKomponentaTreca } from './FunkcijskaKomponenta'

function App() {
  return (
    <>
      <FunkcijskaKomponentaPrva/>
      <FunkcijskaKomponentaDruga title="Funkcijska komponenta" ime="Matej" godine={40}/>
      <FunkcijskaKomponentaDruga title="Funkcijska komponenta" ime="Ivan" godine={25}>
        <p>Dodatan opis...</p>
      </FunkcijskaKomponentaDruga>
      <KlasnaKomponenta title="Klasna komponenta" broj={5} treci={3}/>
    </>
  )
}
export default App
