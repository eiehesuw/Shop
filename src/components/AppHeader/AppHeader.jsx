import { useEffect, useState } from 'react';
import "./AppHeader.scss";
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AppHeader = () => {
    const location = useLocation();
    const basketProducts = useSelector((state) => state.basket.basketProducts);
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const currentPath = location.pathname;

        setCurrentPath(currentPath);
    }, [location.pathname]);

    return (
        <div className="header">
            <div className="app-container">
                <div className="header__navigation">
                    {currentPath === '/basket/' ?
                        <div className="header__navigation-item">
                            <Link to="/"> ← В каталог</Link>
                        </div>
                        :
                        <div className="header__navigation-item">
                            <Link to="/basket/">
                                В корзину
                                {basketProducts && basketProducts.length > 0 &&
                                    <span className="header__navigation-count">{basketProducts.length}</span>
                                }
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default AppHeader;
