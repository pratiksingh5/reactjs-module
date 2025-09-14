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
      // const existing = state.items.find(i=> i.id === item.id);
      // this was the case when the item is newly added
      // const updatedItem = {...item, qty: item.qty || 1};

      // ? i + 1 : item.qty || 1

      // const updatedItems = existing
      //   ? { ...existing, qty: existing.qty + 1 }
      //   : { ...item, qty: item.qty || 1 };

      // state.items.map((i) => )
      // return {...state, items: [...state.items, updatedItem]}

      const existing = state.items.find(i => i.id === item.id);

      const updatedItems = existing ? state.items.map((i) => i.id === item.id  ? {...i, qty: i.qty + (item.qty || 1)} : i) : [...state.items,  {...item, qty: item.qty || 1}]
      return { ...state, items: updatedItems };
    }

    case "REMOVE": {
      const id = action.payload;
      return { ...state, items: state.items.filter((i) => i.id !== id) };
    }

    case "CLEAR": {
      return { ...state, items: [] };
    }

    case "UPDATE_QTY" : {
     const {id, qty} = action.payload;

     return {
      ...state,
      items: state.items.map((i) => i.id === id ?{...i, qty}: i )
     }
    }

    default:
      return state;
  }
}

const CartContext = createContext(null);

// const CartProvider = CartContext.Provider;

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  let totalItems = state.items.length || 0;
  let totalPrice = 0;

  for (let i = 0; i < state.items.length; i++) {
    totalPrice += state.items[i].price;
  }
  // let totalPrice = 0;

  //   state = {
  //     items: [ {
  //       id: 1,
  //       productName: "abcd",
  //       price: 222
  //     },
  //  {
  //       id: 2,
  //       productName: "xyz",
  //       price: 222
  //     }
  //   ]
  //   }

  const value = {
    state,
    dispatch,
    totalItems,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
