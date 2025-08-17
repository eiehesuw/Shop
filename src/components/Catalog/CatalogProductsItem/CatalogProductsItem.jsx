import React, { useState, useEffect } from 'react';
import "./CatalogProductsItem.scss";
import { Link } from 'react-router-dom';

const CatalogProductsItem = ({ product = null }) => {

    return (
        <div className="catalog-list__item">
            <Link to={`/${product.id}/`}>
                <div className="catalog-list__item-img">
                    {product?.colors[0]?.images ?
                        <img src={product.colors[0].images[0]} alt={product.name} />
                        :
                        <div>No image</div>
                    }
                </div>
                <div className="catalog-list__item-price">
                    {product?.colors[0]?.price ? product.colors[0].price + '$' : 'No price'}
                </div>
                <div className="catalog-list__item-name">{product.name}</div>
            </Link>
        </div>
    );
};

export default CatalogProductsItem;
