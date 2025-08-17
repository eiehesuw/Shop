import Catalog from "../pages/Catalog/Catalog";
import Basket from "../pages/Basket/Basket";

export const routes = [
    {path: '/', element: <Catalog />},
    { path: '/:sectionCode/', element: <Catalog />},
    { path: '/:sectionCode/:productId/', element: <Catalog />},
    { path: '/basket/', element: <Basket />},
]