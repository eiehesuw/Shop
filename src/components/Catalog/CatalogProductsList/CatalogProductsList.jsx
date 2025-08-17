import { useState, useEffect } from 'react';
import "./CatalogProductsList.scss";
import { useSelector } from 'react-redux';
import CatalogProductsItem from '../CatalogProductsItem/CatalogProductsItem';

const CatalogProductsList = () => {
    const products = useSelector((state) => state.products.products);
    const sections = useSelector((state) => state.products.sections);
    const [currentSectionProducts, setCurrentSectionProducts] = useState(null);

    // Фильтруем товары по выбранной категории
    useEffect(() => {
        if (!products.length) return;

        const selectedSection = sections.find((section) => section.selected);

        // Если выбрана категория "all", то выводим все товары
        if (!selectedSection || selectedSection?.code === 'all') {
            setCurrentSectionProducts(products);
        } else {
            setCurrentSectionProducts(products.filter((product) => product.sectionCode === selectedSection.code));
        }
    }, [products, sections]);

    return (
        <div className="catalog-list">
            <div className="catalog-list__items">
                {currentSectionProducts && currentSectionProducts.map((item, index) => (
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