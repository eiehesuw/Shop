import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import CatalogHeader from "../../components/Catalog/CatalogHeader/CatalogHeader";
import CatalogProductsList from "../../components/Catalog/CatalogProductsList/CatalogProductsList";
import CatalogDetail from "../../components/CatalogDetail/CatalogDetail";
import { getSizes, getProducts, getProduct } from "../../services/api";
import { setProductsAction, setSizesAction, setSectionsAction } from "../../store/productsReducer";
import ModalComponent from "../../components/UI/ModalComponent/ModalComponent";

const Catalog = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.products);
    const sections = useSelector((state) => state.products.sections);
    const [loading, setLoading] = useState(products.length === 0);
    const [productId, setProductId] = useState(null);
    const [sectionCode, setSectionCode] = useState(null);
    const [currSection, setCurrSection] = useState(null);
    const [product, setProduct] = useState(null);

    // Получаем список товаров
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

    // Получаем список категорий исходя из полученных товаров
    useEffect(() => {
        if (!products.length || params.productId) return;

        const sections = products.map((product) => product.sectionCode);
        const uniqueSections = [...new Set(sections)];

        const sectionOptions = uniqueSections.map((code) => ({
            code,
            selected: params.sectionCode === code,
        }));

        sectionOptions.unshift({ code: 'all', selected: !params.sectionCode });

        dispatch(setSectionsAction(sectionOptions));
    }, [products, params.sectionCode]);

    useEffect(() => {
        setProductId(params.productId ? params.productId : null)
        setSectionCode(params.sectionCode ? params.sectionCode : null)
    }, [params.productId, params.sectionCode])

    useEffect(() => {
        const currSection = sections.find((section) => section.selected);
        setCurrSection(currSection);
    }, [sections]);

    useEffect(() => {
        if (!productId) return;

        getProduct(productId).then((data) => {
            setProduct(data);
        });
    }, [productId]);

    // При закрытии модального окна открываем каталог по ранее выбранной категории
    const closeModalHandler = () => {
        setProduct(null);
        if (currSection && currSection.code !== 'all') {
            navigate(`/${currSection.code}/`)
            return;
        }
        navigate('/')
    }

    return (
        <div className="catalog">
            <div className="app-container">
                {
                    !loading ?
                        <>
                            <CatalogHeader />
                            <CatalogProductsList />
                        </>
                        :
                        <h2>Loading...</h2>
                }
            </div>
            {productId && sectionCode && product &&
                <ModalComponent isOpen={true} closeHandler={closeModalHandler}>
                    <CatalogDetail
                        product={product} />
                </ModalComponent>
            }
        </div>
    );
};

export default Catalog;
