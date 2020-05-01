import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { QueryParamProvider } from 'use-query-params'

import ListPokemons from "./pages/ListPokemons"
import Pokemon from "./pages/Pokemon"

const Routes = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider ReactRouterRoute={Route}>
        <Switch>
          <Route path={["/", "/pokedex"]} exact component={ListPokemons} />
          <Route path={"/pokemon/:id"} component={Pokemon} />
        </Switch>
      </QueryParamProvider>
    </BrowserRouter>
  )
}


export default Routes
