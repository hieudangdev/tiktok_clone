import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from '~/Components/GlobalStyles/'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>
)

// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
