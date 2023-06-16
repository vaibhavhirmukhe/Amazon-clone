import React from 'react'
import "../Style/Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Context/StateProvider';
import { getBasketTotal } from '../Context/reducer';
import {useNavigate} from "react-router-dom"

export default function Subtotal() {
   // eslint-disable-next-line
  const [{basket}, dispatch] = useStateValue();

  const navigate= useNavigate();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox"/>This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
        />
        <button onClick={() => navigate("/payment")} className='subtotal_button'>Proceed To Checkout</button>
    </div>
  )
}
