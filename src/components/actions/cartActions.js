
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'

//ვამატებთ cart actions-ს
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//ვშლით item action-ს
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//ვამრავლებთ qt actions-ს 
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
