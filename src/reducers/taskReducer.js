import { TASKS_LOADED, ADD_TASK, REMOVE_TASK } from '../actions/taskActions';

import CartItem from '../models/cartItem';

export function taskReducer(state = [], action){
    switch(action.type){
        case TASKS_LOADED:
            return action.shoppingCart;
            
        case ADD_TASK:
            const {
                id,
                name,
                UnitPrice,
                TaxRate
            } = action.title;
        
            // const existingIndex = cart.findIndex( cartItem => cartItem.id === id);
            // const existingCartItem = cart[existingIndex];
            // existingCartItem && existingCartItem.add();

            const newItem = new CartItem(id, name, UnitPrice, TaxRate);
                    
            return [
               ...state,
               newItem
             ]

        case REMOVE_TASK:
            let index = -1;
            
            for (let i in state) {
                if (state[i].id === action.id) {
                    index = i;
                    break;
                }
            }

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]

        default:
             return state;
    }
}