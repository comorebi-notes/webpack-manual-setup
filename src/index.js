import React from 'react'
import ReactDOM from 'react-dom'

import Aramakijake from './assets/images/aramakijake.gif'
import SmallImage from './assets/images/10x10.png'
import './assets/stylesheets/index.sass'

const Top = () => (
  <div>
    <h1>test</h1>
    <img src={Aramakijake} width={200} alt="回る新巻鮭" />
    <img src={SmallImage} alt="とても小さい画像" />
  </div>
)

const domContainer = document.getElementById('react')
ReactDOM.render(<Top />, domContainer)
