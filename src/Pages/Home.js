import React from 'react'
import Product from '../components/Product';

function Home({ setProdLength, products }) {
    
    return (
        <div className="row">
            {
                products.length > 0 ?
                    products.map(p => (
                        <div key={p.productId} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <Product item={p} setProdLength={setProdLength} />
                        </div>
                    ))
                
                : 
                <p className="text-center mt-4">Loading...</p>
            }
        </div>
    )
}

export default Home
