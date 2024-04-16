import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "Full Stack Developer",
    description:
      "Fluent in MERN with mongo or firebase databases, I have also worked with postgress sql for rdbms queries ",
    link: "Learn more ",
  },
  {
    name: "UI/UX Design",
    description:
      " My team and i collaborared and worked on an Uber using Blockchain and metamask, we made sure that even with a wallet gateway the user could book a cab with the same number of clicks and simpler than uber itself.",
    link: "Learn more ",
  },
  
];

const Services = () => {
  return (
    <>
      <div className="section" id="services">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row ">
            <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-button bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
              <h2 className="h2 text-accent mb-6">What I do</h2>
              <h4 className="h4 max-w-[455px] mb-16">
                I am a Freelance Fullstack Developer with over 5 years of
                Experience
              </h4>
              <button className="btn btn-sm">See my work</button>
            </motion.div>
            <div>
              <motion.div 
              variants={fadeIn('left', 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1">
                {services.map((service, index) => {
                  const { name, description, link } = service;

                  return (
                    <div
                      className=" h-[146px] mb-[38px] flex flex-row gap-12"
                      key={index}
                    >
                      <div className="max-w-[476px]">
                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                          {name}
                        </h4>
                        <p className=" font-secondary leading-tight w-96">
                          {description}
                        </p>
                      </div>
                      <div className="flex flex-col flex-1 items-end cursor-pointer ">
                        <a
                          href="#"
                          className="btn w-9 h-9 mv-[42px] flex justify-center items-center "
                        >
                          <BsArrowUpRight />
                        </a>
                        <a href="#" className="text-gradient mt-12 text-sm">
                          {link}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
