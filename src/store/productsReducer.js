const defaultState = {
    products: [],
    sizes: [],
    sections: [],
}

const SET_PRODUCTS = "SET_PRODUCTS"
const SET_SIZES = "SET_SIZES"
const SET_SECTIONS = "SET_SECTIONS"

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload }
        case SET_SIZES:
            return { ...state, sizes: action.payload }
        case SET_SECTIONS:
            return { ...state, sections: action.payload }

        default:
            return state
    }
}

export const setProductsAction = (payload) => ({ type: SET_PRODUCTS, payload })
export const setSizesAction = (payload) => ({ type: SET_SIZES, payload })
export const setSectionsAction = (payload) => ({ type: SET_SECTIONS, payload })
