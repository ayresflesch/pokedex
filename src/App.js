import React from 'react';
import { Global } from "./styles/global";

import ListPokemons from "./pages/ListPokemons";

function App() {
  return (
    <div>
      <Global />
      <ListPokemons />
    </div>
  );
}

export default App;
