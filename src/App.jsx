import React from 'react'
import Header from './Component/Header'
import Card from './Component/Card'

const cardval = [
  "🍌",
  "🍇",
  "🍉",
  "🍒",
  "🍓",
  "🍍",
  "🍑",
  "🥑",
  "🍒",
  "🍇",
  "🍍",
  "🍉",
  "🍓",
  "🍌",
  "🥑",
  "🍑",
]

const App = () => {
  return (
    <div className='app'>
      <Header score={3} moves={0}  />

      <div className='cards-grid'>
        {
         cardval.map((card) => (
           <Card card = {card} />  
         ))
        }
      </div>
    </div>
  )
}

export default App