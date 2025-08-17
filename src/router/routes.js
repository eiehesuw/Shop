import Catalog from "../pages/Catalog/Catalog";
import Basket from "../pages/Basket/Basket";

export const routes = [
    {path: '/', element: <Catalog />, exact: true},
    { path: '/:productId/', element: <Catalog />, exact: true},
    { path: '/basket/', element: <Basket />, exact: true},
]