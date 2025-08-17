import React, { useState, useEffect } from 'react';
import "./CatalogProductsList.scss";
import { useSelector } from 'react-redux';
import CatalogProductsItem from '../CatalogProductsItem/CatalogProductsItem';

const CatalogProductsList = () => {
    const products = useSelector((state) => state.products.products);
    const sizes = useSelector((state) => state.products.sizes);
    return (
        <div className="catalog-list">
            <h2>Catalog Products</h2>
            <div className="catalog-list__items">
                {products && products.map((item, index) => (
                    <CatalogProductsItem
                        key={index}
                        product={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default CatalogProductsList;
