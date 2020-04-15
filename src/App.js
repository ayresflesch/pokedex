import React from 'react'
import Routes from "./routes"
import { Global } from "./styles/global"
import ListPokemons from "./pages/ListPokemons"

function App() {
  return (
    <div>
      <Global />
      <Routes>
        <ListPokemons />
      </Routes>
    </div>
  )
}

export default App
