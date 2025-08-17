const defaultState = {
    products: [],
}

const SET_PRODUCTS = "SET_PRODUCTS"

export const basketReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            console.log(action.payload);

            return { ...state, products: action.payload }

        default:
            return state
    }
}

export const setProductsAction = (payload) => ({ type: SET_PRODUCTS, payload })
