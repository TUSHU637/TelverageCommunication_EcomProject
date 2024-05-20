import React, { createContext, useContext, useReducer } from 'react'
const dispatchContext=createContext();
const stateContext=createContext();
const reducer=(state=[],action)=>{
    //console.log(state)
switch(action.type){
    case "ADD":
        return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size,img:action.img}];
    case "Remove":
        let new_arr=[...state]
        new_arr.splice(action.index,1);
        return new_arr;
    case "DROP":
        let emptyarr=[]
        return emptyarr 
    default:console.log("error in reducer")
    
}
}


export const  CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,[]);
//console.log(state)
return(
    <>
   {/* {console.log(state)} */}
    <dispatchContext.Provider value={dispatch}>
        <stateContext.Provider value={state}>
            {children}
        </stateContext.Provider>
    </dispatchContext.Provider>
    </>
)
}


export const useCart=()=>useContext(stateContext);
export const useDipsatchCart=()=>useContext(dispatchContext);