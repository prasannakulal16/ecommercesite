import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addToCart } from "../../../features/CartSlice";
import { useGetAllProductsQuery } from "../../../features/ProductApi";
import Container from "../../global/Container";
import { StarFilled } from "@ant-design/icons";

export default function SingleProduct() {
  // const singleItem = useSelector(state=>state.carts);
  const singleItem = JSON.parse(localStorage.getItem("singleProduct"));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  return (
    <section className="pb-20">
      <Container>
        <div className="lg:grid grid-cols-2 gap-20">
          <div>
            <div>
              <img src={singleItem.imageURL} alt={singleItem.name} />
            </div>

            <div className="mt-10">
              <button
                className="btn-three w-[50%] py-3 font-bold tracking-wider"
                onClick={() => handleAddToCart(singleItem)}
              >
                <span className="z-10 ">ADD TO CART</span>
              </button>
            </div>
          </div>
          <div className="product bg-green-300 self-center shadow-lg shadow-black py-16 px-10 rounded-md">
            <ul className="">
              <li className="text-4xl font-extrabold mb-2">
                {singleItem.name}
              </li>
              <li className="inline-block mb-10">{singleItem.desc}</li>
              <li className="text-black font-bold text-2xl mb-3">
                {singleItem.currency} {singleItem.price}
              </li>
              <li className="lg:grid grid-cols-3 mb-5">
                <h3 className="font-bold">Rating</h3>
                <div className="">
                  <div className="bg-green-500 px-2 py-[1px] rounded-md w-14 text-center">
                    5
                    <sup className="pl-1">
                      <StarFilled />
                    </sup>
                  </div>
                </div>
              </li>
              <li className="mb-5">
                <div className="lg:grid grid-cols-3">
                  <h3 className="font-bold">Type</h3>
                  <div className="bg-red-400 rounded-md px-3 py-1 w-20 text-center self-center">
                    <span className="">{singleItem.gender}</span>
                  </div>
                </div>
              </li>
              <li className="mb-5">
                <div className="lg:grid grid-cols-3">
                  <span className="font-bold">Quantity </span>
                  <span className="text-black font-semibold">
                    {singleItem.quantity}
                  </span>
                </div>
              </li>
              <li>
                <div className="lg:grid grid-cols-3">
                  <span className="font-bold">Color </span>
                  {singleItem.color}
                  <span className={singleItem.color.toLowerCase()==='blue' ? 'bg-blue-700 font-semibold w-16 rounded-full':singleItem.color.toLowerCase()==='green'?'bg-green-400 font-semibold w-16 rounded-full':singleItem.color.toLowerCase()==='black'?'bg-black font-semibold w-16 rounded-full':null}  >
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
