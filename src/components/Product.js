import React from 'react'

function Product({ item, setProdLength }) {

    const addToCart = product => {
        let products = [];
        if(localStorage.getItem('products') === null)
        {
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
        } else {
            products = JSON.parse(localStorage.getItem('products'));
            
            for(let p of products){
                if(p.productId === product.productId){
                    alert('You can not add an item twice in the basket.');
                    return;
                } 
            }
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));
        } 

        setProdLength(JSON.parse(localStorage.getItem('products')).length)
    }

    return (
        <div className="border rounded p-2 m-2">
            <p>{item.item}</p>
            <span>Price : {item.price}</span><br/>
            <button className="btn btn-sm btn-warning w-100 mt-2" onClick={() => addToCart(item)}>Add In Cart</button>
        </div>
    )
}

export default Product
