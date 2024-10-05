import React from "react";
import { CalendarDays } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";

function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-Satisfy font-bold  pt-6"> Projects </h2>

      <div className="flex justify-between py-6 pb-2">
        <h3 className="text-2xl font-semibold text-emerald-400">
          Weather Forecasting Application:
        </h3>
        <div className="flex pl-12 text-sm">
          <CalendarDays /> June 2022
        </div>
      </div>

      <p className="text-gray-600">
        Designed and implemented a Weather Forecasting App using Python and
        Tkinter, integrating OpenWeatherAPI for real-time data retrieval, with
        robust error handling and an intuitive, user-friendly interface to
        enhance user experience.
      </p>
      <div className="flex justify-between pt-3">
        <div className="flex gap-3 pt-3">
          <button className="bg-gray-300 rounded-full px-2"> Python </button>
          <button className="bg-gray-300 rounded-full px-2"> Tkinter </button>
          <button className="bg-gray-300 rounded-full px-2">
            {" "}
            OpenWeatherAPI
          </button>
        </div>
        <div className="flex border border-black bg-slate-200 p-1 rounded-md border-opacity-50 text-sm">
          <p className="px-2">&lt;/&gt; View Code</p>
        </div>
      </div>

      <div className="flex justify-between py-6 pb-2 pt-14">
        <h3 className=" text-2xl font-semibold text-emerald-400">
          Amazon Clone:
        </h3>
        <div className="flex pl-12 text-sm">
          <CalendarDays /> May 2024
        </div>
      </div>

      <p className="text-gray-600">
        Developed a responsive Amazon clone using HTML and CSS, featuring
        product sections, deals, reviews, and pricing. Ensured device
        responsiveness with media queries, matching Amazon's design and
        enhancing user experience.
      </p>
      <div className="flex justify-between pt-3">
        <div className="flex  gap-3 pt-3">
          <button className="bg-gray-300 rounded-full px-2"> HTML </button>
          <button className="bg-gray-300 rounded-full px-2"> CSS </button>
          <button className="bg-gray-300 rounded-full px-2">
            Grid Layouts/Flexbox
          </button>
        </div>
        <div className="flex border border-black bg-slate-200 p-1 rounded-md border-opacity-50 text-sm">
          <p className="px-2">&lt;/&gt; View Code</p>
        </div>
      </div>

      <div className="flex justify-between py-6 pb-2 pt-14 ">
        <h3 className=" text-2xl  font-semibold text-emerald-400">
          Full Stack Blog Site:
        </h3>
        <div className="flex pl-12 text-sm">
          <CalendarDays /> June 2024
        </div>
      </div>
      <p className="text-gray-600">
        Developed a full-stack blog site with Node.js, Express, and MongoDB,
        featuring a RESTful API for authentication and blog management. Designed
        a responsive React.js frontend, integrating Redux for efficient state
        management.
      </p>
      <div className="flex justify-between pt-3">
        <div className="flex gap-3 pt-3">
          <button className="bg-gray-300 rounded-full px-2"> Node.js </button>
          <button className="bg-gray-300 rounded-full px-2">
            {" "}
            Express.js{" "}
          </button>
          <button className="bg-gray-300 rounded-full px-2"> MongoDB </button>
          <button className="bg-gray-300 rounded-full px-2">
            {" "}
            RESTful API{" "}
          </button>
          <button className="bg-gray-300 rounded-full px-2"> React.js </button>
        </div>
        <div className="flex border border-black bg-slate-200 p-1 rounded-md border-opacity-50 text-sm">
          <p className="px-2">&lt;/&gt; View Code</p>
        </div>
      </div>

      <br />
      <br />
      <hr />
      <div className="flex justify-between p-4">
        <div className="text-lg">@GIRIJA RAYALA</div>
        <div className="flex gap-3">
          <a className="flex items-center hover:text-sky-600 ">
            <Twitter />
          </a>
          <a className="flex items-center hover:text-pink-600">
            {" "}
            <Instagram />{" "}
          </a>
          <a className="flex items-center hover:text-sky-600">
            {" "}
            <Linkedin />{" "}
          </a>
          <a className="flex items-center hover:text-gray-600">
            {" "}
            <Github />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
