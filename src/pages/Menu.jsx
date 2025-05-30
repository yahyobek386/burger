import React from 'react'
import { data } from '../data/data'

const Menu = () => {
  return (
    <div className='menu'>
      <h2>Viberite svoy burger</h2>
      <div className='menu-list'>
        {data.map((item, index) => {
          return (
            <div className='menu-list-item' key={index}>
              <img src={item.img} alt={item.title} className="card-img" />
              
              <h3 className='item-title'>{item.title}</h3>
              
              <p className='item-desc'>{item.desc}</p>
              
              <div className='item-bottom'>
                <div className='price-box'>
                  <h3 className='price'>{item.price} $</h3>
                  <p className='netto'>{item.netto} gr</p>
                </div>
                <button className='item-buy'>
                  Buyurtma berish
                  <img src='buy-icon.png' alt="" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
