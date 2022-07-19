import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from '@react-icons/all-files/bi/BiCartAlt';
import { CartMenu } from '../cart-menu';
import { ItemsInCart } from '../items-in-cart';
import './cart-block.css';
import { calcTotalPrice } from "../utils";


export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const navigate = useNavigate();
    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        navigate('/order')
    }, [navigate] );
    return (
        <div className="cart-block" >
            <ItemsInCart quantity={items.length} ></ItemsInCart>
            <BiCartAlt size={25} className="cart-block__icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}></BiCartAlt>
            {totalPrice > 0 ? <span className="cart-block__total-price" > {totalPrice} руб.</span> : null}
           { isCartMenuVisible &&  <CartMenu items={items} onClick={handleClick} ></CartMenu>}
        </div>
    )
}