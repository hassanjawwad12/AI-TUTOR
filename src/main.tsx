import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"

const theme : Record<string, any> = extendTheme({
  colors: {
    brand: {
      main: '#5865F2',
      light: '#FFFFFF',
      dark: '#23272A',
      gray: '#4E4E4E'
    },
  },
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
