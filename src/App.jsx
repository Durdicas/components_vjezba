import './App.css'
import FunkcijskaKomponenta from './FunkcijskaKomponenta'
import KlasnaKomponenta from './KlasnaKomponenta'

function App() {
  return (
    <>
      <FunkcijskaKomponenta/>
      <KlasnaKomponenta title="Klasna komponenta" broj={5} treci={3}/>
    </>
  )
}

export default App
