import React from 'react'
import { useSelector } from 'react-redux'
import { OrderItem } from '../../componets/order-item'
import { calcTotalPrice } from '../../componets/utils'
import './order-page.css'

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)

    if(items.length < 1) {
        return(
            <h1>Ваша Корзина пуста</h1>
        )
    }
  return (
    <div className='order-page' > 
        <div className='order-page__left' > 
            { items.map(game => <OrderItem game={game} ></OrderItem>)}
        </div>
        <div className='order-page__right'>
            <div className='order-page__total-price' >
                <span>
                    {items.length} товара на сумму {calcTotalPrice(items)} руб.
                </span>
            </div>

        </div>
    </div>
  )
}
