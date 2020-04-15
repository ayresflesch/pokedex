import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import ListPokemons from "./pages/ListPokemons"
import Pokemon from "./pages/Pokemon"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={["/", "/pokedex"]} exact component={ListPokemons} />
        <Route path={"/pokemon/:id"} component={Pokemon} />
      </Switch>
    </BrowserRouter>
  )
}


export default Routes
