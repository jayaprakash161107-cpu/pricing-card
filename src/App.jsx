import React from 'react'
import "./App.css"
import Card from './component/Card'
import pricingPlans from './src/data/pricingData'

export const App = () => {
  return (
   <>
   <div className='container'>
   
    {
      pricingPlans.map(price=>{
       return <Card key={price.id} price={price}/>
      })
    }
   </div>
   </>
  )
}

export default App