import React from 'react'
import { useStateValue } from '../Context/StateProvider'
import '../Style/Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

export default function Checkout() {
    // eslint-disable-next-line
    const [{basket, user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/Promotions/July22/SF/V1/V2_PC.gif" alt="error" />

            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>
                {basket.map(items =>(
                    <CheckoutProduct
                        id={items.id} 
                        title={items.title} 
                        image={items.image} 
                        price={items.price} 
                        rating={items.rating}/>
                ))}
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal/>
        </div>
    </div>
  )
}
