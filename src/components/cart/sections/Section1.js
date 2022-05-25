import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LeftCircleFilled,PlusOutlined,MinusOutlined } from "@ant-design/icons";
import Container from "../../global/Container";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../../../features/CartSlice";
import '../../../assets/css/Cart.css'

export default function Section1() {
  const cart = useSelector((store) => store.carts);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTotals())
  },[cart,dispatch])

  const handleRemoveFromCart=(cartItem)=>{
    dispatch(removeFromCart(cartItem))
  }

  const handleCartDecrement =(cartItem) =>{
    dispatch(decreaseCart(cartItem))
  }

  const handleCartIncrement =(cartItem)=>{
    dispatch(addToCart(cartItem))
  }

  const handleClearCart =() =>{
    dispatch(clearCart())
  }


  return (
    <Container>
      <div className="">
      {/* <h2>Shopping Cart</h2> */}
      {cart.cartItems.length === 0 ? (
        <div className="text-center mt-52">
          <p className="text-xl font-medium">Your Cart is Currently empty</p>
          <div className="text-center">
            <Link to="/">
              <LeftCircleFilled style={{"font-size":"25px"}}/>
              <span className="text-[16px] font-extralight pl-3 align-middle">Start shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="xl:grid lg:grid sm:grid mobileHidden grid-cols-5 gap-1 border-b-2 mb-6">
            <h3 className="col-span-2 text-lg font-semibold">Product</h3>
            <h3 className="col-span-1 text-lg font-semibold">Price</h3>
            <h3 className="col-span-1 text-lg font-semibold">Quantity</h3>
            <h3 className="col-span-1 text-lg font-semibold">Total</h3>
          </div>
          <div className="">
            {cart.cartItems?.map((cartItem) => (
              <div className="xl:grid sm:grid items-start grid-cols-5 gap-1 border-b-2 pb-5 pt-5" key={cartItem.id}>
                <div className="col-span-2 flex justify-self-start">
                  <img src={cartItem.image} alt={cartItem.name} className="mx-auto h-[150px]"/>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium">{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button className="border-[1px] border-slate-400 px-2 py-1 rounded-md hover:shadow-md hover:shadow-gray-600" onClick={()=>handleRemoveFromCart(cartItem)} > Remove</button>
                  </div>
                </div>
                <div className="xl:col-span-1">Price : ${cartItem.price}</div>
                <div className="xl:col-span-1 flex justify-center w-28 border-slate-300 border-[1px] py-1 rounded-sm">
                  <button className="font-extrabold" onClick={()=>handleCartDecrement(cartItem)}><MinusOutlined style={{"verticalAlign":"middle"}}/></button>
                  <div className="px-5 font-bold">{cartItem.cartQuantity}</div>
                  <button className="font-extrabold" onClick={()=>handleCartIncrement(cartItem)}><PlusOutlined style={{"verticalAlign":"middle"}}/></button>
                </div>
                <div className="col-span-1">
                  Total : ${cartItem.price * cartItem.cartQuantity}
                </div>
                </div>
            ))}
          </div>
          <div className="xl:flex sm:flex justify-between mt-10 pb-10">
            <button className="border-[1px] border-slate-400 mt-8 rounded-md font-medium h-[40px] w-[138px] max-w-[100%] hover:shadow-md hover:shadow-gray-600" onClick={()=>handleClearCart()}>Clear cart</button>
            <div className="">
              <div className="flex justify-between">
                <span className="">SubTotal</span>
                <span>${cart.cartTotalAmount}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <button className="block bg-blue-700 text-white rounded-sm w-[100%] py-3 mb-5 text-lg font-bold">Check out</button>
              <Link to="/">
                <LeftCircleFilled style={{"font-size":"25px"}}/>
                <span className="pl-3 text-[16px] font-extralight align-middle">Continue shopping</span>
              </Link>
            </div>
          </div>
        </>
      )}
      </div>
    </Container>
  );
}
