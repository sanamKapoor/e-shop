import React from 'react';
import { Link } from 'react-router-dom';

function Header({prodLength}) {

    return (
        <div className="px-5 py-1 bg-secondary text-light d-flex justify-content-between align-items-center position-fixed top-0 left-0 right-0 w-100">
            <h3>Logo</h3>
            <Link to="/cart" className="btn btn-sm btn-warning"><i class="fas fa-shopping-cart fa-1x"></i> <span className="badge text-dark bg-light mx-2">{prodLength}</span></Link>
        </div>
    )
}

export default Header
