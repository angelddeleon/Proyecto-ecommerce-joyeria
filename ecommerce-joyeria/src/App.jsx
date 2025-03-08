import { Route, Routes, BrowserRouter } from 'react-router'
import Registrarse from './views/client/Registrarse.jsx'
import IniciarSesion from './views/client/IniciarSesion.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Registrarse/>}/>
        <Route path='/iniciarsesion' element={<IniciarSesion/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App