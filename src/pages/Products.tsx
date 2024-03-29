import React from 'react';
import {Product} from "../models/product";

const Products = (props: { products: Product[] }) => {
    return (

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {props.products.map(product => {
                return (
                    <div className="col">
                        <div className="card shadow-sm">
                            <img src={product.image} height={200} alt=""/>

                            <div className="card-body">
                                <p className="card-text">{product.title}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <small className="text-muted">${product.price}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>

    );
};

export default Products;