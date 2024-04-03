import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ClassCom from './ClassCom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App a={4} b={7}/>
    <ClassCom  props="hello class component this is props"  props2="welcome"/>
  </React.StrictMode>,
)
