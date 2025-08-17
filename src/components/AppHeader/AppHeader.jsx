import React, { useEffect, useState } from 'react';
import "./AppHeader.scss";
import { Link, useLocation } from 'react-router-dom';

const AppHeader = () => {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const currentPath = location.pathname;

        setCurrentPath(currentPath);
    }, [location.pathname]);

    return (
        <div className="header">
            <p>Header</p>

            {currentPath === '/basket/' ?
                <Link to="/">Catalog</Link>
                :
                <Link to="/basket/">Basket</Link>
            }
        </div>

    );
};

export default AppHeader;
