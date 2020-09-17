import React from 'react'
import ReactDOM from 'react-dom'
import './assets/stylesheets/index.sass'

const Top = () => (
  <div>
    <h1>test</h1>
  </div>
)

const domContainer = document.getElementById('react')
ReactDOM.render(<Top />, domContainer)
