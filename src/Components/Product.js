import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../Context/StateProvider'
import "../Style/Product.css"

export default function Product({id, title, image, price, rating}) {
    // eslint-disable-next-line
    const [state, dispatch] = useStateValue();

    const addToBasket=() =>{
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

  return (
    <div className='product'>
        <div className="product_info">
            <p>{title}</p>
            
            <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p className="product_price">
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
        
            <div className="product_rating">
                {Array(rating).fill().map((_, i)=>(
                    "⭐"
            ))}
            </div>
        </div>

        <img className="product_img" src={image} alt="error" />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
