import './App.css'
import { FunkcijskaKomponentaPrva } from './FunkcijskaKomponenta'
import { FunkcijskaKomponentaDruga } from './FunkcijskaKomponenta'
import  KlasnaKomponenta   from './KlasnaKomponenta'

function App() {
  return (
    <>
      <FunkcijskaKomponentaPrva/>
      <FunkcijskaKomponentaDruga title="Funkcijska komponenta"/>
      <KlasnaKomponenta title="Klasna komponenta" broj={5} treci={3}/>
    </>
  )
}
export default App
