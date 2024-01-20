import React from "react"
import logo from "../assets/images/logo.jpg"
import { MENUS } from "../constants"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <header className="shadow-md sticky top-0 bg-white z-20">
        <div className="container px-4 mx-auto flex justify-between items-center py-2">
          <Link to="/">
            <img
              className="object-cover w-[60px] md:pl-0 md:w-[120px]"
              src={logo}
              alt="logo"
            />
          </Link>
          <i
            className="icon icon-menu icon-32 cursor-pointer px-5 block md:hidden"
            id="nav-btn"
          ></i>
          <nav className="hidden md:flex">
            {MENUS.map(item => (
              <div className="mx-7" key={item.label}>
                <span className="nav-item-header transition-header pb-3 border-b-2 border-white hover:border-primary hover:pb-1">
                  <Link className="text-xl uppercase" to={item.path}>
                    {item.label}
                  </Link>
                </span>
              </div>
            ))}
          </nav>
        </div>
      </header>

      <nav
        className="fixed top-0 bottom-0 transition-all bg-white z-50 p-5 -left-[300px] w-[300px] md:hidden"
        id="nav-sp"
      >
        <div className="flex justify-end mb-4">
          <i
            className="icon icon-close icon-32 cursor-pointer"
            id="nav-close-btn"
          ></i>
        </div>
        <div className="flex-col flex relative">
          {MENUS.map(item => (
            <div className="mb-3" key={item.label}>
              <span className="nav-item-header transition-header pb-3 border-b-2 border-white hover:border-primary hover:pb-1">
                <Link className="text-xl uppercase" to={item.path}>
                  {item.label}
                </Link>
              </span>
            </div>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Header
