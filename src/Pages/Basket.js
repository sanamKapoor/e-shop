import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Basket({setProdLength}) {

    const [cartItems, setCartItems] = useState([]); 
    let totalPrice = 0;

    useEffect(() => {
        let cartProds = JSON.parse(localStorage.getItem('products'));

        if(cartProds){
            setCartItems(cartProds);
        }
    }, [])

    const deleteItem = id => {
        let remainProducts = cartItems.filter(p => {
            if(p.productId !== id){
              return p;
            } else {
                return null;
            }
          });

        setCartItems(remainProducts);
        localStorage.setItem('products', JSON.stringify(remainProducts));
        setProdLength(JSON.parse(localStorage.getItem('products')).length)
    }

    const getTotalPrice = () => {
        cartItems.map(p => {
            let price = +p.price.split('$')[1];
            totalPrice += price;
            return null;
        })

        return totalPrice.toFixed(2);
    }

    return (
        <div className="mt-5">
            <Link to="/" className="mt-5"><i class="fas fa-arrow-left fa-2x mt-4"></i></Link>
            {
                cartItems.length > 0 ?
                    <div className="row">
                        {
                            cartItems.map(p => (
                                <div className="col-10 mx-auto my-2 border rounded" key={p.productId}>
                                    <div className="row p-2 align-items-center">
                                        <p className="col-12 col-sm-6 col-md-6">{p.item}</p>
                                        <span className="col-12 col-sm-6 col-md-3 mb-2">{p.price}</span>
                                        <button className="col-12 col-md-3 btn btn-sm btn-danger" onClick={() => deleteItem(p.productId)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                :
                <p className="text-center">Basket is Empty !!</p>
            }

            {
                cartItems.length > 0 &&
                <>
                <hr/>
                <div className="d-flex justify-content-end">
                    <h5 className="lead">Total Price :  <span className="bg-primary text-light p-1 border rounded">{ getTotalPrice() }</span></h5>
                </div>
                </>
            }

        </div>
    )
}

export default Basket
