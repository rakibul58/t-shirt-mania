import React from 'react';
import './Cart.css'

const Cart = ({cart , handleRemoveItem}) => {


    let message;
    if(cart.length === 0){
        message = <p>Please Buy at least one</p>
    }
    else if(cart.length === 1){
        message = <div>
            <h3>Amar ekta nao</h3>
            <p>tomar nijer jonno ekta</p>
            <p><small>amar jonno arek ta nao</small></p>
        </div>
    }
    else{
        message = <p>Thanks For Buying</p>
    }

    return (
        <div>
            <h1 className={cart.length === 2 ? 'orange' : 'purple'}>Order Summary</h1>
            <h5 className={`bold ${cart.length ===2 ? 'blue' : 'yellow'}`}>Order quantity: {cart.length}</h5>
            {
                cart.map(tshirt=> <p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3? <p>Tin jon ke gift diba?</p> : <p>Kino kino</p>
            }
            <p>and operator</p>
            {cart.length === 2 && <h2>Double item</h2> }
            
            <p>or operator</p>
            {cart.length === 4 || <h2>Charta item</h2> }
        </div>
    );
};

export default Cart;