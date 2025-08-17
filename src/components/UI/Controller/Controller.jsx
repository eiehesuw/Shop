import "./Controller.scss";

const Controller = ({ updateQuantity, product }) => {

    return (
        <div className="controller">
            <button onClick={() => updateQuantity(product.uid, -1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateQuantity(product.uid, 1)}>+</button>
        </div>
    );
};

export default Controller;
