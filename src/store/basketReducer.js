const defaultState = {
    basketProducts: [],
}

const SET_BASKET_PRODUCTS = "SET_BASKET_PRODUCTS"

export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_BASKET_PRODUCTS:
            return { ...state, basketProducts: action.payload }

        default:
            return state
    }
}

export const setBasketProductsAction = (payload) => ({ type: SET_BASKET_PRODUCTS, payload })
