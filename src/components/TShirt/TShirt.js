import React from 'react';
import './TShirt.css';

const TShirt = ({tshirt , handleAddTOCart}) => {
    const {picture , name , price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: ${price} </h4>
            <button onClick={()=>handleAddTOCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt;