import React, { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../../../features/ProductApi";
import Container from "../../global/Container";
import { StarFilled, FilterTwoTone } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addToCart, singleProduct } from "../../../features/CartSlice";
import { useNavigate } from "react-router";
import "../../../assets/css/Cart.css";
import ColorCheckboxes from "../../checkbox/Checkbox";
import { GenderCheckboxes } from "../../checkbox/Checkbox";
import { TypeCheckboxes } from "../../checkbox/Checkbox";
import "../../../assets/css/Home.css";
import { Button, Drawer } from "antd";

export default function Section1() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [noResult, setNoResults] = useState(false);

  // const handleAddToCart= (product)=>{
  //   dispatch(addToCart(product))
  //   navigate('/cart')
  // }

  const handleSingleProduct = (product) => {
    dispatch(singleProduct(product));
    navigate("/product");
  };

  const [brandExpanded, setBrandExpanded] = useState(false);
  const [colorExpanded, setColorExpanded] = useState(false);

  const [FilterBrand, setFilterBrand] = useState({
    color: [],
  });

  //filters state

  function showBrandFilter() {
    setBrandExpanded((prev) => !prev);
  }
  function showColorFilter() {
    setColorExpanded((prev) => !prev);
  }

  const [datafromChild, setDatafromChild] = useState();
  const [genderDatafromChild, setGenderDatafromChild] = useState();
  const [typeDatafromChild, setTypeDatafromChild] = useState();

  //color
  const checkboxesDataprop = (data) => {
    setDatafromChild(data);
  };

  //gender
  const GenderDataprop = (data) => {
    setGenderDatafromChild(data);
  };

  //type
  const TypeDataprop = (data) => {
    setTypeDatafromChild(data);
  };

  const [List, setList] = useState(data);
  const [colorFilter, setColorFilter] = useState();

  const applyFilters = () => {
    let updatedList = data;
    //color filter
    const checkboxChecked = datafromChild
      ?.filter((item) => item.checked)
      ?.map((item) => item.color.toLowerCase());

    if (checkboxChecked) {
      updatedList = updatedList?.filter((item) =>
        checkboxChecked.includes(item.color.toLowerCase())
      );
      console.log("color state", updatedList);
    }

    //gender filter
    const gendercheckboxChecked = genderDatafromChild
      ?.filter((item) => item.checked)
      ?.map((item) => item.gender.toLowerCase());

    if (gendercheckboxChecked) {
      updatedList = updatedList?.filter((item) =>
        gendercheckboxChecked.includes(item.gender.toLowerCase())
      );
    }

    //Type filter
    const typecheckboxChecked = typeDatafromChild
      ?.filter((item) => item.checked)
      ?.map((item) => item.type.toLowerCase());

    if (typecheckboxChecked) {
      updatedList = updatedList?.filter((item) =>
        typecheckboxChecked.includes(item.type.toLowerCase())
      );
    }

    // Search Filter
    if (searchTerm !== "") {
      updatedList = updatedList?.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } 
 
    if(updatedList && Object.keys(updatedList).length===0){
      setNoResults(true)
    }else{
      setNoResults(false)
    }
    // if(updatedList && Object.keys(updatedList).length===0){
    //   setList(data)
    //   console.log("resolve",updatedList)
    // }else{
    setList(updatedList);
    console.log("rejected", updatedList);
    // }

    // console.log("List is d",List?.map(item=>item))
  };

  useEffect(() => {
    applyFilters();
  }, [datafromChild, searchTerm, data, genderDatafromChild, typeDatafromChild]);

  const homeData = () =>
    List?.map((product) => (
      <div className="col-span-1 overflow-hidden">
        <div
          key={product.id}
          className="col-span-1 border-8 p-5 cursor-pointer hover:bg-green-400 hover:transform hover:scale-105 hover:text-black"
          onClick={() => handleSingleProduct(product)}
        >
          <div className="border-2 py-4">
            <img
              src={product.imageURL}
              alt={product.name}
              className="mx-auto h-[150px]"
            />
          </div>
          <div className="pt-8 h-[207px]">
            <h3 className="uppercase font-extrabold text-lg">{product.name}</h3>
            {product.gender === "Men" ? (
              <span className="inline-block w-[80px] text-center bg-red-400 rounded-md ">
                {product.gender}
              </span>
            ) : (
              <span className="inline-block w-[80px] text-center bg-violet-500 rounded-md ">
                {product.gender}
              </span>
            )}
            <span className="bg-green-500 px-2 py-[1px] rounded-md ml-2 float-right">
              {/* {product.rating} */} 5
              <sup className="pl-1">
                <StarFilled />
              </sup>
            </span>
            <p className="font-bold text-lg pt-3">
              {product.currency} {product.price}
            </p>
            <div className="flex">Type : {product.type}</div>
          </div>
        </div>
      </div>
    ));

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
                <div className="col-span-1 flex justify-end">
                  <h1 className="text-xl font-bold">Filters</h1>
                  <p className="lg:hidden">
                    <Button
                      type="primary"
                      onClick={showDrawer}
                      className="!bg-transparent !border-none"
                    >
                      <FilterTwoTone style={{ fontSize: "25px" }} />
                    </Button>
                  </p>
                </div>
              </div>

              <div className="lg:grid grid-cols-4">
                <div className="col-span-3">
                  {noResult?<div className="text-center">
                    <lottie-player
                      src="https://assets4.lottiefiles.com/packages/lf20_aBYmBC.json"
                      background="transparent"
                      speed="1"
                      style={{ width: "300px", height: "300px", margin:'auto' }}
                      loop
                      autoplay
                    ></lottie-player>
                    <h1>Sorry, we couldn't find any results.</h1>
                  </div>:null}
                  <div className="lg:grid grid-cols-3">{homeData()}</div>
                </div>
                <div className="col-span-1 pl-14 relative">
                  <Drawer
                    title="Basic Drawer"
                    placement="right"
                    onClose={onClose}
                    visible={visible}
                  >
                    <form className="mb-5">
                      <div className="multiselect">
                        <div className="selectBox" onClick={showBrandFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span>Color</span>
                          </div>
                          <div className="overSelect"></div>
                        </div>
                        {/* {brandExpanded ? ( */}
                        <div id="brandCheckboxes" className="border-2 px-3">
                          <ColorCheckboxes
                            checkboxesDataprop={checkboxesDataprop}
                          />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>

                    <form className="mb-5">
                      <div class="multiselect">
                        <div class="selectBox" onClick={showColorFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span>Gender</span>
                          </div>
                          <div class="overSelect"></div>
                        </div>
                        {/* {colorExpanded ? ( */}
                        <div id="colorCheckboxes" className="border-2 px-3">
                          <GenderCheckboxes GenderDataprop={GenderDataprop} />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>

                    <form>
                      <div class="multiselect">
                        <div class="selectBox" onClick={showColorFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span>Type</span>
                          </div>
                          <div class="overSelect"></div>
                        </div>
                        {/* {colorExpanded ? ( */}
                        <div id="colorCheckboxes" className="border-2 px-3">
                          <TypeCheckboxes TypeDataprop={TypeDataprop} />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>
                  </Drawer>
                  <div className="lg:block hidden sticky top-20 right-0">
                    <form className="mb-5">
                      <div className="multiselect">
                        <div className="selectBox" onClick={showBrandFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span className="font-semibold">Color</span>
                          </div>
                          <div className="overSelect"></div>
                        </div>
                        {/* {brandExpanded ? ( */}
                        <div id="brandCheckboxes" className="border-2 px-3">
                          <ColorCheckboxes
                            checkboxesDataprop={checkboxesDataprop}
                          />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>

                    <form className="mb-5">
                      <div class="multiselect">
                        <div class="selectBox" onClick={showColorFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span className="font-semibold">Gender</span>
                          </div>
                          <div class="overSelect"></div>
                        </div>
                        {/* {colorExpanded ? ( */}
                        <div id="colorCheckboxes" className="border-2 px-3">
                          <GenderCheckboxes GenderDataprop={GenderDataprop} />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>

                    <form>
                      <div class="multiselect">
                        <div class="selectBox" onClick={showColorFilter}>
                          <div className="py-3 px-3 bg-green-500">
                            <span className="font-semibold">Type</span>
                          </div>
                          <div class="overSelect"></div>
                        </div>
                        {/* {colorExpanded ? ( */}
                        <div id="colorCheckboxes" className="border-2 px-3">
                          <TypeCheckboxes TypeDataprop={TypeDataprop} />
                        </div>
                        {/* ) : null} */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
