import React from 'react'
import "../Style/Payment.css"
import { useStateValue } from '../Context/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

export default function Payment() {
  // eslint-disable-next-line
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='payment'>
        <div className="payment_container">

            <h1>
                Checkout ( <Link to="/checkout">{basket?.length} Items</Link>)
            </h1>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>Sr.no. 40 Jamle Plot,</p>
                    <p>Kehav Nagar,</p>
                    <p>Mundhawa, Pune.</p>
                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(items => (
                        <CheckoutProduct
                            id={items.id} 
                            title={items.title} 
                            image={items.image} 
                            price={items.price} 
                            rating={items.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    
                </div>                            
            </div>
        </div>
    </div>
  )
}
