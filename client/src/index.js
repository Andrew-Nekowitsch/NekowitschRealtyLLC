import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthContextProvider } from './contexts/AuthContext'
import { StateContextProvider } from './contexts/StateContext'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContextProvider>
        <CssBaseline />
        <App />
      </StateContextProvider>
    </AuthContextProvider>
  </React.StrictMode >,
  document.getElementById('root'),
)
