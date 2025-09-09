// Cart
//  const item  = {
//     id: 1,
//     title: "Watch",
//     price: 555,
//     quantity: 2,
//     image: "url",
//     // totalPrice: price * quantity
//  }

// import { createContext } from "react";

// useReducer
// payload

// switch case
// case 1 : setProduct
// case 2: setPrice
// case 3 setLoading

// reducer function -->

// 2 parameters --

// 1. state
// 2. action

// action = {
//     type: "Case 1",
//     payload: handleUpload()
// }

// 1. INIT
// items: []

// 2. ADD
// items: [{id: "1", title: "abc", quantity: 2, price: 100, image: "link"}]

// 3. REMOVE
// items: [{id: "1", title: "abc", quantity: 2, price: 100, image: "link"}, {id: "1", title: "abc", quantity: 2, price: 100, image: "link"}]

// items: [{id: "1", title: "abc", quantity: 2, price: 100, image: "link"}]

// 4. UPDATE_QUANTITY
// items: [{id: "1", title: "abc", quantity: 2, price: 100, image: "link"}]
// items: [{id: "1", title: "abc", quantity: 3, price: 100, image: "link"}]

// 5. CLEAR
// items: []

// Ye 5 mil ke ek hi state ko update krenge --->  State -> items[]

// import { useReducer } from "react";

// const initialState = {
//   items: [],
// };

// const initialState = {
//   items: [{ id: "1", title: "abc", quantity: 2, price: 100, image: "link" }],
// };

// state = {
//    items: [{id: "1", title: "abc", quantity: 2, price: 100, image: "link"}]
// }

// ADD

// action : {
//     type: "ADD",
//     payload: {id: "2", title: "rrrr", quantity: 1, price: 100, image: "link"}
// }
// action.type = "ADD"
// action.payload: {id: "2", title: "rrrr", quantity: 1, price: 100, image: "link"}

// REMOVE

// action : {
//     type: "REMOVE",
//     payload: {id: "2"}
// }

// UPDATE_QUANTITY

// action : {
//     type: "UPDATE_QUANTITY",
//     payload: {id: "2", quantiy: 5}
// }

// CLEAR

// action : {
//     type: "CLEAR",
//     Clear ke liye payload ka kya zarurart?
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "INIT":
//       return action.payload;

//     case "ADD": {
//       const { item } = action.payload;

//       const existingItems = state.items;
//       return { ...existingItems, item };
//     }

//     case "REMOVE": {
//       const id = action.payload;
//       return { ...state, items: state.items.filter(p > p.id !== id) };
//     }

//     case "CLEAR": {
//         return {...state, items: []}
//     }
//   }
// }

import { useReducer, createContext, useContext } from "react";

const initialState = {
  items: [],
  // userName: "Pratik" 
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { item } = action.payload;

      // state.items.map((i) => )
      return {...state, items: [...state.items, item]}
    }
    default:
      return state;
  }
}

const CartContext = createContext(null);

// const CartProvider = CartContext.Provider;

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // let totalItems = 0;
  // let totalPrice = 0;

  const value = {
    state,
    dispatch,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
