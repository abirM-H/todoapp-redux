
import {ADD_LIST, REMOVE_LIST, EDIT_LIST, TOGGLE_LIST}from '../actions/action-type'

export const addList=(newTodo)=>{

    return {type:ADD_LIST,
        payload:newTodo}
}
export const removeList=(id)=>{
    return {type:REMOVE_LIST,
       payload :id}
}
export const editList=(editTodo,id)=>{
    return {type:EDIT_LIST,
        index:id,
        payload:editTodo}
}
// export const toggle_list=(id,todo)=>{
//     return{
//         type:TOGGLE_LIST,
//         index:id,
//         payload:todo

        

      
//     }
// }