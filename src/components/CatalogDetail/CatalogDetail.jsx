import { useEffect, useState } from 'react';
import "./CatalogDetail.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setBasketProductsAction } from "../../store/basketReducer";
import Controller from '../UI/Controller/Controller';

const CatalogDetail = ({ product = null }) => {
    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.basketProducts);
    const sizes = useSelector((state) => state.products.sizes);
    const [selectedColor, setSelectedColor] = useState(null);
    const [productSizes, setProductSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState(null);

    useEffect(() => {
        setSelectedColor(product?.colors?.[0]);
    }, [product]);

    // Собираем список доступных размеров по выбранному цвету
    useEffect(() => {
        if (!selectedColor) return;
        const currentSizes = sizes.filter((size) =>
            selectedColor.sizes.includes(size.id)
        );
        setProductSizes(currentSizes);
        setSelectedSize(currentSizes.length > 0 ? currentSizes[0] : null);
    }, [selectedColor, sizes]);

    // Формируем уникальный идентификатор
    const getUid = (prodId, colorId, sizeId) =>
        `${prodId}_${colorId}_${sizeId}`;

    // Добавляем товар в корзину
    const addToBasket = () => {
        if (!product || !selectedColor || !selectedSize) return;

        const uid = getUid(product.id, selectedColor.id, selectedSize.id);

        const existingProduct = basketProducts.find((p) => p.uid === uid);

        let updatedBasket;

        // Если товар уже есть в корзине, то увеличиваем количество
        if (existingProduct) {
            updatedBasket = basketProducts.map((p) =>
                p.uid === uid ? { ...p, quantity: p.quantity + 1 } : p
            );
        } else {

            // Если товара нет в корзине, то добавляем
            const newProduct = {
                uid,
                productId: product.id,
                name: product.name,
                color: selectedColor,
                size: selectedSize,
                quantity: 1,
            };

            updatedBasket = [...basketProducts, newProduct];
        }

        dispatch(setBasketProductsAction(updatedBasket));
    };

    // Обновляем количества товара в корзине
    const updateQuantity = (uid, delta) => {
        let updatedBasket = basketProducts
            .map((p) =>
                p.uid === uid ? { ...p, quantity: p.quantity + delta } : p
            )
            .filter((p) => p.quantity > 0);

        dispatch(setBasketProductsAction(updatedBasket));
    };

    const uid = product && selectedColor && selectedSize
        ? getUid(product.id, selectedColor.id, selectedSize.id)
        : null;

    // Проверяем есть ли товар в корзине, в случае если да, то выводим его количество
    const basketItem = basketProducts.find((p) => p.uid === uid);

    return (
        <div className="catalog-detail">
            <div className="catalog-detail__images">
                {selectedColor?.images &&
                    selectedColor.images.map((img, index) => (
                        <img
                            className="catalog-detail__images-item"
                            src={img}
                            alt={product?.name}
                            key={index}
                        />
                    ))}
            </div>
            <div className="catalog-detail__right">
                <p className="catalog-detail__right-name">
                    {product?.name}, {selectedColor?.name}
                </p>

                <div className="catalog-detail__right-colors">
                    {product?.colors &&
                        product.colors.map((color, index) => (
                            <div
                                key={index}
                                className="catalog-detail__right-color"
                                onClick={() => setSelectedColor(color)}
                            >
                                <span
                                    className="catalog-detail__right-color--circle"
                                    style={{ backgroundColor: color.color }}
                                ></span>
                                <span className="catalog-detail__right-color--name">
                                    {color.name}
                                </span>
                            </div>
                        ))}
                </div>

                <div className="catalog-detail__right-sizes">
                    {sizes &&
                        productSizes &&
                        sizes.map((size, index) => (
                            <button
                                key={index}
                                className={
                                    "catalog-detail__right-size" +
                                    (selectedSize?.id === size.id
                                        ? " catalog-detail__right-size--active"
                                        : "")
                                }
                                onClick={() => setSelectedSize(size)}
                                disabled={!productSizes.includes(size)}
                            >
                                {size.label}
                            </button>
                        ))}
                </div>

                <div className="catalog-detail__right-price">
                    {selectedColor?.price
                        ? Number(selectedColor.price) + " $"
                        : "No price"}
                </div>

                {basketItem ? (
                    <Controller
                        updateQuantity={updateQuantity}
                        product={basketItem}
                    />
                ) : (
                    <button
                        className="catalog-detail__right-button"
                        onClick={addToBasket}
                        disabled={productSizes.length === 0}
                    >
                        В корзину
                    </button>
                )}
            </div>

            <div className="catalog-detail__description">
                <p className="catalog-detail__description-text">
                    {selectedColor?.description}
                </p>
            </div>
        </div>
    );
};

export default CatalogDetail;
