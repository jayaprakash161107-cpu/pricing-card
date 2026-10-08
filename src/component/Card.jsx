import React from 'react'

export const Card = ({price}) => {
  return (
    <>
    <div className='card'>
        <h4>{price.title}</h4>
        <h2>{price.price}</h2>
        <ul>
            {
                price.features.map((feature) => (
                    <li className={feature.available ? "black" : "gray"}><i className={`fa-solid ${feature.available ? "fa-check":"fa-x"}`}></i> {feature.text}</li>
                ))
            }
        </ul>
        <button className='btn'>BUTTON</button>
    </div>
    </>
  )
}

export default Card


