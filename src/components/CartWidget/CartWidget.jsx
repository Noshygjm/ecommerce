import React from 'react'
import carrito from '/src/assets/carrito.png'

const CartWidget = ({cantidad}) => {
  return (
      <div className="cart-widget">
        <img src={carrito} alt="Carro de compra" />
        <span>{cantidad}</span>
      </div>
  )
}

export default CartWidget
