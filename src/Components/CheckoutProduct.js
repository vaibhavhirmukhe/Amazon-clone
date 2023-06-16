import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Context/StateProvider'
import "../Style/CheckoutProduct.css"

export default function CheckoutProduct({id, image, title, price, rating}) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
    <div className='checkoutProduct'>
        <img src={image} alt="error" className="checkoutProduct_image" />

        <div className="checkoutProduct_info">
            <p className='checkoutProduct_title'>{title}</p>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p className="checkoutProduct_price">
                        <strong>{value}</strong>
                    </p>
                </>
            )}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />

            <div className="checkoutProduct_rating">
                {Array(rating).fill().map((_, i)=>(
                    "⭐"
            ))}
            </div>

            <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
    </div>
  )
}
