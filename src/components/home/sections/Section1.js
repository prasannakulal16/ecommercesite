import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../features/ProductApi";
import Container from "../../global/Container";
import { StarFilled,FilterTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart, singleProduct } from "../../../features/CartSlice";
import { useNavigate } from "react-router";
import "../../../assets/css/Cart.css";

export default function Section1() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  // const handleAddToCart= (product)=>{
  //   dispatch(addToCart(product))
  //   navigate('/cart')
  // }

  const handleSingleProduct = (product) => {
    dispatch(singleProduct(product));
    navigate("/product");
  };
  
  const [brandExpanded,setBrandExpanded] = useState(false)
  const [colorExpanded,setColorExpanded] = useState(false)

  function showBrandFilter() {

    setBrandExpanded(prev=>!prev)
  }
  function showColorFilter() {
    setColorExpanded(prev=>!prev)
  }
  return (
    <div>
      <Container>
        <div className="">
          {isLoading ? (
            <p>Loading ....</p>
          ) : error ? (
            <p>An error occured ..</p>
          ) : (
            <>
              <h2> New Arrival Products</h2>
              <div className="grid grid-cols-5">
                <div className="col-span-4">
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="border-2 p-2 mb-4 w-[50%]"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="col-span-1 flex justify-evenly">
                  <h1 className="text-xl font-bold">Filters</h1>
                  <p> <FilterTwoTone style={{"fontSize":"25px"}}/></p>
                 
                </div>
              </div>

              <div className="xl:grid grid-cols-4">
                <div className="col-span-3">
                  <div className="lg:grid grid-cols-3">
                    {data
                      ?.filter((searchItem) => {
                        if (searchTerm === "") {
                          return searchItem;
                        } else {
                          return searchItem.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase());
                        }
                      })
                      ?.map((product) => (
                        <div className="col-span-1">
                          <div
                            key={product.id}
                            className="col-span-1 border-8 p-5 cursor-pointer"
                            onClick={() => handleSingleProduct(product)}
                          >
                            <div className="border-2 py-4">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="mx-auto h-[150px]"
                              />
                            </div>
                            <div className="pt-8 h-[207px]">
                              <h3 className="uppercase font-extrabold text-lg">
                                {product.name}
                              </h3>
                              <span className="inline-block w-36">
                                {product.desc}
                              </span>
                              <span className="bg-green-500 px-2 py-[1px] rounded-md ml-2 float-right">
                                {product.rating}
                                <sup className="pl-1">
                                  <StarFilled />
                                </sup>
                              </span>
                              <p className="text-green-500 font-bold text-lg pt-3">
                                ${product.price}
                              </p>
                              <div className="flex">
                                Size :
                                {product.size.map((item) => (
                                  <p className="px-2 mx-1 bg-slate-500">
                                    {item}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="col-span-1 px-14">
                  <form className="mb-5">
                    <div className="multiselect">
                      <div className="selectBox" onClick={showBrandFilter}>
                        <select className="py-3 px-3 bg-green-500">
                          <option>Brand</option>
                        </select>
                        <div className="overSelect"></div>
                      </div>
                      {brandExpanded?(<div id="brandCheckboxes" className="border-2 px-3">
                        <label for="one" className="block">
                        <input type="checkbox" className="mr-2 my-3" id="brand1"/>
                          Peter england
                        </label>
                        <label for="two" className="block">
                        <input type="checkbox" className="mr-2 mb-3" id="brand2"/>
                          Gucci
                        </label>
                        <label for="three" className="block">
                        <input type="checkbox" className="mr-2 mb-3" id="brand3"/>
                          Jump cuts
                        </label>
                      </div>):null}
                    </div>
                  </form>

                  <form>
                    <div class="multiselect">
                      <div class="selectBox" onClick={showColorFilter}>
                        <select className="py-3 px-3 bg-green-500">
                          <option>Color</option>
                        </select>
                        <div class="overSelect"></div>
                      </div>
                     { colorExpanded?(<div id="colorCheckboxes" className="border-2 px-3">
                        <label for="one" className="block">
                        <input type="checkbox" className="mr-2 my-3" id="color1"/>
                          Blue
                        </label>
                        <label for="two" className="block">
                        <input type="checkbox" className="mr-2 mb-3" id="color2"/>
                          Red
                        </label>
                        <label for="three" className="block">
                        <input type="checkbox" className="mr-2 mb-3" id="color3"/>
                          Yellow
                        </label>
                      </div>):null}
                    </div>
                  </form>
                
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
