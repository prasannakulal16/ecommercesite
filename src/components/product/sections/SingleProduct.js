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
    <Container>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              {singleItem.altImage.map((item) => (
                <ul>
                  <li>
                    <img
                      src={item}
                      alt={singleItem.name}
                      className="h-[100px] w-[70px] mb-5"
                    />
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-span-3">
              <img src={singleItem.image} alt={singleItem.name} />
            </div>
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
        <div className="">
          <Container>
            <ul>
              <li className="text-4xl font-extrabold mb-2">{singleItem.name}</li>
              <li className="inline-block mb-10">{singleItem.desc}</li>
              <li className="text-green-500 font-bold text-2xl mb-3">
                ${singleItem.price}
              </li>
              <li className="bg-green-500 px-2 py-[1px] rounded-md w-14">
                {singleItem.rating}
                <sup className="pl-1">
                  <StarFilled />
                </sup>
              </li>
              <li className="flex mt-4">
                <span className="font-bold mr-3">Size : </span>
                {singleItem.size.map((item) => (
                  <p className="px-2 mx-1 bg-slate-500">{item}</p>
                ))}
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </Container>
  );
}
