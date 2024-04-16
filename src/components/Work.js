import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <section className="section" id="work">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-x-10">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-1 flex-col gap-y-12 mb-10 lg:mb-0"
            >
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My Latest <br /> Work
                </h2>
                <Link to="/projects">
                  <button className="btn btn-sm">View all projects</button>
                </Link>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Link to="/projects">
                  <img
                    className="group-hover:scale-125 curson-pointer transition-all duration-500"
                    src="bct.png"
                    alt=""
                  />
                </Link>

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient">Full Stack Developer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1 flex flex-col gap-y-10 "
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Link to="/projects">
                  <img
                    className="group-hover:scale-125 curson-pointer transition-all duration-500"
                    src="Sahyog.svg"
                    alt=""
                  />
                </Link>
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient">Full Stack Developer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                <Link to="/projects">
                  <img
                    className="group-hover:scale-125 curson-pointer transition-all duration-500"
                    src="btt.png"
                    alt=""
                  />
                </Link>
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-gradient">Full Stack Developer</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Project Title</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
