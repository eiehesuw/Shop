import { combineReducers, createStore, applyMiddleware } from "redux";
import { productsReducer } from "./productsReducer";
import { basketReducer } from "./basketReducer";

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer
})

export const store = createStore(rootReducer)