import React from 'react'
import { data } from '../data/data'

const Menu = () => {

    let menu = data


  return (
    <div className='menu'>
       <h2>
        Viberite svoy burger
       </h2>
       <div className='menu-list'>
       {menu.map((item , index)=>{
            return(
                <div className='menu-list-item' key={index}>

              <img src={item.img} alt="" className="card-img" />
     

    
            <h3 className='item-title'>
          BBQ с беконом и курицей
            </h3>
            <p className='item-desc'>
          Булочка бриошь с кунжутом, куриная котлета, сыр чеддер, томат, огурец маринованный, лук маринованный, салат Ромен, бекон, соус BBQ
            </p>
            <div className='item-bottom'>
                <div className='price-box'>
                    <h3 className='price'>
                        7 $
                    </h3>
                    <p className='netto'>
                        390 gr
                    </p>
                </div>
                <button className='item-buy'>
                    Buyurtma berish
                    <img src='buy-icon.png' alt="" className='' />
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