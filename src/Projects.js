import React, { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [image, setImage] = useState("btt.png");

  const toggleProject = () => {
    setImage("btt.png"); // Reset image to default when switching projects
    setCurrentProjectIndex((prevIndex) => {
      return (prevIndex + 1) % projects.length; // Cycle through projects
    });
  };

  // Dummy data for demonstration
  const projects = [
    {
      image: "btt.png",
      link: "https://goeth.netlify.app/",
      title: "GOETH",
      description: [
        "A Taxi Booking Application On Blockchain Built with transparency in mind Decentralized booking system Secure and efficient transactions."
      ],
    },
    {
      image: "Sahyog.svg",
      link: "https://sahyog-tbd.netlify.app/",
      title: "Sahyog",
      description: [
        "The Problem: India, despite having robust identity systems like Aadhar and employment qualifications like PAN, lacks a comprehensive healthcare ecosystem. This absence leaves a significant void in the nation's overall well-being, impacting not just individual health but also the economic landscape. The lack of a streamlined healthcare model in India poses challenges in accessing timely medical advice, leading to delayed treatments, increased health risks, and subsequently, reduced workforce productivity.",
      ],
    },
    {
      image: "tamb.svg",
      link: "https://neilcarnac.github.io/raffle/",
      title: "Theme-based Tambola Tickets Generator",
      description: [
        "a customised housie/tambola ticket generator using simple html and js.",
      ],
    },
    // Add more project objects here
  ];

  const currentProject = projects[currentProjectIndex];

  return (
    <>
      <div className="mx-auto flex font-[helvetica]">
        <div className="flex flex-col lg:p-20 p-10 gap-16">
          <h2 className="lg:text-5xl md:text-3xl tracking-wide underline font-medium">
            Projects Listed Below
          </h2>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4 items-center w-full">
              <img
                src={currentProject.image}
                className="lg:w-3/4 md:w-full rounded-lg"
                alt={currentProject.title}
              />

              <div className="flex flex-col gap-4 items-center">
                <Link to={currentProject.link}>
                  <p className="underline text-center leading-tight lg:text-4xl md:text-2xl font-medium">
                    {currentProject.title}
                  </p>
                </Link>
                <p className="leading-tight text-center sm:w-full lg:text-xl sm:text-xs font-thin">
                  {currentProject.description.map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
                <button
                  onClick={toggleProject}
                  className="p-2 bg-black text-white w-full lg:w-1/2 rounded-lg"
                >
                  Switch
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="lg:text-5xl md:text-3xl tracking-wide underline font-medium">
              UnHosted Projects
            </h2>
            <div className="flex flex-col gap-2 ">
              <a
                className="text-2xl font-semibold underline"
                href="https://github.com/neilcarnac/mern_ok"
              >
                E Commerce Website
              </a>
              <p className="leading-tight sm:w-full lg:text-xl sm:text-xs font-thin ">
                E-commerce Website with full backend capabilities available
                User Profile to check details of user Admin Panel to check
                List of orders and users Integrated Payment Gateway for secure
                transactions Responsive design for mobile and desktop
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <a
                className="text-2xl font-semibold underline"
                href="https://github.com/neilcarnac/mern_ok"
              >
                Healthcare Mobile App
              </a>
              <p className="leading-tight sm:w-full lg:text-xl sm:text-xs font-thin ">
              EverGuardian is more than just a tracking app; it's a comprehensive solution designed to support families in caring for their loved ones and ensuring their well-being at all times. Whether it's tracking a teenager's whereabouts, reminding an elderly parent to take medication, or providing essential medical information during emergencies, FamilyCare is the trusted companion for families seeking peace of mind and enhanced safety for their loved ones.

              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
