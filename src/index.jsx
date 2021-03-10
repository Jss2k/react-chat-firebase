import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Global } from './global.styles'

ReactDOM.render(
  <>
    <Global />
      <App />
  </>,
  document.getElementById('root')
)
