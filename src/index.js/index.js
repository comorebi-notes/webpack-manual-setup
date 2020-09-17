import React from 'react'
import ReactDOM from 'react-dom'

const Top = () => (
  <div style={{ backgroundColor: 'black', color: 'yellow' }}>
    <h1>test</h1>
  </div>
)

const domContainer = document.getElementById('react')
ReactDOM.render(<Top />, domContainer)
