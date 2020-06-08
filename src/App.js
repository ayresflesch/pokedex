import React from 'react'
import Routes from "./routes"
import { Global } from "./styles/global"
import ListPokemons from "./pages/ListPokemons"
import ThemeProviderWrapper from './providers/ThemeProviderWrapper'

function App() {
  return (
    <ThemeProviderWrapper>
      <Global />
      <Routes>
        <ListPokemons />
      </Routes>
    </ThemeProviderWrapper>
  )
}

export default App
