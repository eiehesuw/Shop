import "./BasketItem.scss";
import { useSelector, useDispatch } from 'react-redux';
import { setBasketProductsAction } from "../../../store/basketReducer";
import Controller from '../../UI/Controller/Controller';

const BasketItem = ({ product = null }) => {
    const dispatch = useDispatch();
    const basketProducts = useSelector((state) => state.basket.basketProducts);

    // Обновляем количества товара
    const updateQuantity = (uid, delta) => {
        let updatedBasket = basketProducts
            .map((p) =>
                p.uid === uid ? { ...p, quantity: p.quantity + delta } : p
            )
            .filter((p) => p.quantity > 0);

        dispatch(setBasketProductsAction(updatedBasket));
    };

    return (
        <div className="basket-item">
            <div className="basket-item__img">
                {product?.color?.images ? <img src={product.color.images[0]} alt={product.name} /> : <div>No image</div>}
            </div>
            <div className="basket-item__info">
                <span className="basket-item__info-name">{product.name}</span>
                <span className="basket-item__info-color">
                    {product?.color?.name ? product.color.name : ''}
                </span>
                {product?.color?.name && product?.size?.label &&
                    <span className="basket-item__info-separator">
                        /
                    </span>
                }
                <span className="basket-item__info-size">
                    {product?.size?.label ? product.size.label : ''}
                </span>
            </div>
            <div className="basket-item__action">
                <div className="basket-item__action-price">{product?.color?.price ? Number(product.color.price) * product.quantity + ' $' : 'No price'}</div>
                <Controller
                    updateQuantity={updateQuantity} product={product} />
            </div>
        </div>
    );
};

export default BasketItem;
