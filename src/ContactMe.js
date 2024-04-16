import React from "react";
import { Link } from "react-router-dom";
function ContactMe() {
  return (
    <>
      <div className="mx-auto mt-24 rounded-lg w-96  border border-1 border-white">
        <div className="p-8 flex flex-col gap-4">
          <div>
            <h2 className="text-2xl font-tertiary font-medium text-white">
              Contact Me
            </h2>
          </div>
          <div className="flex flex-col  gap-0">
            <img
              src="nc.svg"
              className=" rounded-lg p-0 border-2 border-white"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-0">
            <div className="flex flex-row gap-1">
              <p className="text-xl">Email: </p>
              <p className="text-xl font-medium">ncarnac@gmail.com</p>
            </div>
            <div className="flex flex-row gap-1">
              <p className="text-xl">Phone Number: </p>
              <p className="text-xl font-medium">+91 9619938374</p>
            </div>
          </div>
          <Link to="/">
            <button className="bg-black w-full text-white p-2 rounded-lg">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
