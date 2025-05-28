import React from 'react'


const Order = () => {
  return (


    

    <div className='order'>
      
      <h1 className='order-title'>
        Buyurtma berish
      </h1>
    

    <div>
    <img src='order.png' alt="Burger" className="order-image" />  
   </div>
   
   <div> 
    <img src='ch.png' alt="Burger" className="order-images" />  
   </div>


  <div> 
    <img src='LOGO7png' alt="Burger" className="burgers" />  
   </div>


     <div className='order-input'>
        <h2 className='order-head-text'>
        Barcha ma'lumotlarni to'ldiring va menejerimiz buyurtmangizni tasdiqlash uchun siz bilan bog'lanadi.
        </h2>
        <input type="text" placeholder='Ismingizni kiriting' />
        <input type="text" placeholder='Telefon raqamingiz' />
        <input type="text" placeholder='Manzilingiz' />
        <button>
          Buyurtma berish
               
        </button>
   <h1>
   
   
   </h1>
      
      </div>

    </div>
  )
}

export default Order