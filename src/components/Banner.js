import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section
        className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
        id="home"
      >
        <div className="container mx-auto">
          <div className="flex flex-col gapy-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
            <div className="flex-1 text-center font-secondary lg:text-left ">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-[45px] font-bold leading-[0.8] lg:text-[100px]"
              >
                NEIL <span>CARNAC</span>
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-6 text-[36px] lg:text-[52px] font-secondary font-semibold uppercase leading-[1]"
              >
                <span className="text-white mr-4"> I am a</span>
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                  ]}
                  speed={30}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
              <motion.p
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="mb-auto mx-0 max-w-lg lg:max-0"
              >
                Passionate software developer with a knack for turning ideas
                into functional and user-friendly applications
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex max-w-max gap-x-6 my-6 items-center mb-12 mx-auto lg:mx-0 "
              >
                <Link to="/contact">
                  <button className="btn btn-lg ">Contact Me</button>
                </Link>
                <Link to="/resume">
                  <p className="text-gradient btn-link" href="#">
                    My Resume
                  </p>
                </Link>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
              >
                <a href="https://github.com/neilcarnac">
                  <FaGithub />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
                <a href="#">
                  <FaDribbble />
                </a>
              </motion.div>
            </div>
            {/* <motion.div
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[462px] "
            >
              <img src={Image} alt=" " />
            </motion.div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
