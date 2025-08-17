const defaultState = {
    products: [],
    sizes: [],
}

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_SIZES = "SET_SIZES"

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            console.log(action.payload);
            
            return { ...state, products: action.payload }
        case SET_SIZES:
            return { ...state, sizes: action.payload }

        default:
            return state
    }
}

export const setProductsAction = (payload) => ({ type: SET_PRODUCTS, payload })
export const setSizesAction = (payload) => ({ type: SET_SIZES, payload })
