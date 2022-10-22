import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Container from "./Container";
import "antd/dist/antd.min.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link, Router } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/css/Header.css";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import { Button, Modal } from 'antd';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartTotalQuantity } = useSelector((state) => state.carts);

  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 200) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    console.log("log",isModalOpen)
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const menu = (
    <Menu
    items={[
      {
        key: '1',
        label: (
          <Link rel="noopener noreferrer" to="/">
            My Profile
          </Link>
        ),
      },
      {
        key: '2',
        label: (
          <Link rel="noopener noreferrer" to="/cart">
            My cart
          </Link>
        ),
       
      },
      {
        key: '3',
        label: (
          <div onClick={showModal}>
            Logout
          </div>
        ),
      }
     
    ]}
  
      
    />
  );


  return (
    <section className="bg-orange-300 mb-8 sticky top-0 right-0 z-50">
      <Modal visible={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Do you want to logout ?</p>
        
      </Modal>
      <Container>
        <nav className="">
          <div className="flex items-center justify-between">
            <Link className="" to="/">
              <p className="text-red-600 font-extrabold text-xl">
                <span className="text-black">TreeRex</span> Store
              </p>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex">
                <Link
                  to="/cart"
                  className="text-green-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium "
                >
                  <span className="product-quantity hover:text-white">
                    <ShoppingCartOutlined
                      style={{ fontSize: "36px", color: "#08c" }}
                    />{" "}
                    <sup className="font-bold text-black rounded-xl px-[5px] text-sm bg-green-500">
                      {cartTotalQuantity}
                    </sup>
                  </span>
                  {/* <span className="pl-2 text-lg font-bold">Cart</span> */}
                </Link>
                <Dropdown overlay={menu} className="ml-4">
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <Avatar
                        size="large"
                        icon={<UserOutlined />}
                        className="!flex !justify-center !items-center"
                      />
                    </Space>
                  </a>
                </Dropdown>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </Container>
     
    </section>
  );
}

export default Header;
