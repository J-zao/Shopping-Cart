
export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const TASKS_LOADED = 'TASKS_LOADED';

export function addTask(title){
    return {
        type: ADD_TASK,
        title
    }
}

export function removeTask(id){
    return {
        type: REMOVE_TASK,
        id
    }
}

export function getCart(){
    let shoppingCart =[];
    return{
        type: TASKS_LOADED,
        shoppingCart
    }
}