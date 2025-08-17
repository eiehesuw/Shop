import "./BasketList.scss";
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem/BasketItem';

const BasketList = () => {
    const basketProducts = useSelector((state) => state.basket.basketProducts);

    return (
        <div className="basket-list">
            {basketProducts.length > 0 ?
                basketProducts.map((product, index) => (
                    <BasketItem
                        key={index}
                        product={product}
                    />
                )) :
                <div className="basket-list__empty">Корзина пуста :(</div>
            }
        </div>
    );
};

export default BasketList;
