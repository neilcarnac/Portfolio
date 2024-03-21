import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Contact = () => {
  return (
    <>
      <section className="lg:section  py-16" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row ">
            <motion.div 
             variants={fadeIn("right", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center">
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get in touch</h4>
                <h2 className="text-[42px] lg:text-[90px] leading-none mb-12">Let's work <br /> together!</h2>
              </div>
            </motion.div>
            <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start">
              <input className="bg-transparent outline-none border-b py-3 w-full focus:border-accent transition-all " placeholder="Your Name"  type="text"/>
              <input className="bg-transparent outline-none border-b py-3 w-full focus:border-accent transition-all " placeholder="Your E-Mail"  type="text"/>
              <textarea rows={5} className="bg-transparent outline-none border-b py-3 w-full focus:border-accent transition-all resize-none mb-12 " placeholder="Your message"></textarea>
              <button className="btn btn-lg">Send Message</button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
