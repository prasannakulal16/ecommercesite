import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart : (state, action) =>{
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log("index",itemIndex)

      if (itemIndex >= 0 ) {
        if(state.cartItems[itemIndex].cartQuantity < state.cartItems[itemIndex].quantity){
          state.cartItems[itemIndex].cartQuantity += 1;
          toast.info(
            `Increase ${state.cartItems[itemIndex].name} Cart Quantity`,
            {
              position: "bottom-left",
            }
          );
        }
        else{
          toast.warn(
            `Product ${state.cartItems[itemIndex].name} temporarily out of stock`,
            {
              position: "top-right",
            }
          );
        }
       
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to Cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state,action)=>{
        const nextCartItem = state.cartItems.filter(
            (cartItem)=>cartItem.id !== action.payload.id
        )

        state.cartItems =nextCartItem
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        toast.error(
            ` ${action.payload.name} removed from Cart`,
            {
              position: "bottom-left",
            }
          );
    },
    decreaseCart :(state,action)=>{
        const itemIndex = state.cartItems.findIndex(
            (cartItem) => cartItem.id === action.payload.id
          );
        if(state.cartItems[itemIndex].cartQuantity >1){
            state.cartItems[itemIndex].cartQuantity -=1;

            toast.info(`Decreased ${action.payload.name} Cart quantity`, {
                position: "bottom-left",
              });

        } else if(state.cartItems[itemIndex].cartQuantity===1){
            const nextCartItem = state.cartItems.filter(
                (cartItem)=>cartItem.id !== action.payload.id
            )
    
            state.cartItems =nextCartItem;
    
            toast.error(
                ` ${action.payload.name} removed from Cart`,
                {
                  position: "bottom-left",
                }
              );
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

    },
    clearCart : (state,action)=>{
        state.cartItems= []
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        toast.error(
            ` Cart is cleared`,
            {
              position: "bottom-left",
            }
          );

    },
    getTotals : (state,action) =>{
        let {total,quantity} =state.cartItems.reduce(
            (cartTotal,cartItem)=>{
                const {price,cartQuantity} = cartItem;
                const itemTotal= price * cartQuantity;
                
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },
            {
                total:0,
                quantity:0
            }

        );
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
    },
    singleProduct : (state, action) =>{
      localStorage.setItem('singleProduct',JSON.stringify(action.payload))
      // return action.payload
      
    }

  },
});

export const { addToCart ,removeFromCart,decreaseCart,clearCart,getTotals,singleProduct } = cartSlice.actions;

export default cartSlice.reducer;
