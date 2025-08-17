import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import "./Catalog.scss";
import CatalogHeader from "../../components/Catalog/CatalogHeader/CatalogHeader";
import CatalogProductsList from "../../components/Catalog/CatalogProductsList/CatalogProductsList";
import CatalogDetail from "../../components/CatalogDetail/CatalogDetail";
import { getSizes, getProducts } from "../../services/api";
import { setProductsAction, setSizesAction } from "../../store/productsReducer";
import ModalComponent from "../../components/UI/ModalComponent/ModalComponent";

const Catalog = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.products);
    const [loading, setLoading] = useState(true);
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        getProducts()
            .then((data) => {
                dispatch(setProductsAction(data))
            })
            .then(() => getSizes())
            .then((data) => {
                dispatch(setSizesAction(data))
            })
            .then(() => setLoading(false))


    }, []);

    useEffect(() => {
        setProductId(params.productId ? params.productId : null)
    }, [params.productId])

    const closeModalHandler = () => {
        navigate('/')
    }

    return (
        <div className="catalog">
            <h1>Catalog</h1>
            {
                !loading ?
                    <>
                        <CatalogHeader />
                        <CatalogProductsList />
                    </>
                    :
                    <h2>Loading...</h2>
            }
            {productId &&
                <ModalComponent isOpen={true} closeHandler={closeModalHandler}>
                    <CatalogDetail
                        id={productId} />
                </ModalComponent>
            }
        </div>
    );
};

export default Catalog;
