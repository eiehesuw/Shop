import "./CatalogProductsItem.scss";
import { Link } from 'react-router-dom';

const CatalogProductsItem = ({ product = null }) => {
    // Вычисяем диапазон цен
    const getPriceRange = (product) => {
        const prices = product.colors.map((color) => parseFloat(color.price));
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        if (minPrice === maxPrice) {
            return `${minPrice} $`;
        } else {
            return `${minPrice} $ - ${maxPrice} $`;
        }
    };

    const priceRange = getPriceRange(product);

    return (
        <div className="catalog-list__item">
            <Link to={`/${product?.sectionCode}/${product?.id}/`}>
                <div className="catalog-list__item-img">
                    {product?.colors[0]?.images ?
                        <img src={product.colors[0].images[0]} alt={product.name} />
                        :
                        <div>No image</div>
                    }
                </div>
                <div className="catalog-list__item-price">{priceRange}</div>
                <div className="catalog-list__item-name">{product.name}</div>
            </Link>
        </div>
    );
};

export default CatalogProductsItem;
