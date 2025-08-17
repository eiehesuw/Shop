import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Basket.scss";

const Basket = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket.products);
    const [loading, setLoading] = useState(true);

    return (
        <div className="catalog-detail">
            <h1>Basket</h1>
            {
                !loading ?
                    <>

                    </>
                    :
                    <h2>Loading...</h2>
            }

        </div>
    );
};

export default Basket;
