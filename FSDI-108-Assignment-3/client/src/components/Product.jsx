import {React, useState} from 'react'
import QuantityPicker from './QuantityPicker'
import './Product.css'

const Product = (props) => { //This brings all of the properties input into the parent component
const [quantity, setQuantity] = useState(1);

const addCart = () => {
  console.log(`Added ${quantity} ${props.data.title} to cart`);
}

const onQuantityChange = (quantity) => {
  console.log(`Quantity of ${props.data.title} changed to`, quantity);
  setQuantity(quantity);
}

const getTotal = () => {
  let total = props.data.price*quantity
  return total.toLocaleString(undefined, { maximumFractionDigits: 2 })
}

  return (
    <div className="product-container">

        <a href={props.data.link} className="product-heading">
        <img className="product-img" src={"images/" + props.data.image} alt="A Product" />
        <hr></hr>
          <h5 className="product-heading">{props.data.title}</h5>
        </a>
        <p>Each: ${props.data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                   {/* 👇 a function that gets called NOW which has a return! */}
        <p>Total: ${getTotal()}</p>

        <div className="controls">
          <div className="d-grid gap-2 col-6 mx-auto">
            <button onClick={addCart} id='addCart' className="btn btn-warning" type="submit">Add to cart</button>
          </div>

          <div>                       {/* 👇 a function that gets called LATER! */}
            <QuantityPicker onChange={onQuantityChange} minimum="1" stock={props.data.stock} />
          </div>
        </div>
    </div>
  )
}

export default Product