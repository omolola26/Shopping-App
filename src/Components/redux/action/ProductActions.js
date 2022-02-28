import { ActionTypes } from "../containers/Action-types"
export const setProducts = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
}

export const selectedProducts = (products) => {
    return{
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products,
    }
}

export const removeSelectedProducts = (products) => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: products,
    }
}