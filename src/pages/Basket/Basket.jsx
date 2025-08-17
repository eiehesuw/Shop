import BasketList from '../../components/Basket/BasketList/BasketList';

const Basket = () => {
    return (
        <div className="basket">
            <div className="app-container">
                <h1>Корзина</h1>
                <BasketList />
            </div>
        </div>
    );
};

export default Basket;
