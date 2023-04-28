import { Formulario, Header, ListadoPacientes } from "./components"
import { PacientesProvider } from "./context/PacientesProvider"

function App() {
  return (

    <PacientesProvider>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPacientes />
        </div>
      </div>
    </PacientesProvider>
  )
}

export default App
