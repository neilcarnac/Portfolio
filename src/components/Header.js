import React from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="py-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <a href="#">
              <h2 className="text-xl uppercase font-medium mb-2 tracking-wide text-gradient">
                Neil <br /> <h2 className="text-white">Carnac</h2>
              </h2>
            </a>
            <Link to="/contact">
              <button className="btn btn-sm ">Work with me</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
