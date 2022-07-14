import React from "react"
import theme from './constants/theme'
import { ThemeProvider } from '@mui/material/styles'
import Router from "./routes/Router";
import { PokemonProvider } from "./hooks/PokemonProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>

      <PokemonProvider>
        <Router />
      </PokemonProvider>
        
    </ThemeProvider>
  );
}

export default App;
