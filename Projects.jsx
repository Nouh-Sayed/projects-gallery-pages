import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
  {
    id: 1,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 2,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 3,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 4,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 5,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 6,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
  {
    id: 7,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunset",
    desc: "Each character will appear one by one",
  },
  {
    id: 8,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Dog",
    desc: "Each character will appear one by one",
  },
  {
    id: 9,
    image: "/images/tatvan-belediyesi-fotograf-galerisi-2.webp",
    title: "Sunrise",
    desc: "Each character will appear one by one",
  },
];

const Projects = () => {
  return (
    <>
      <div className="container mx-auto ">
        <h1 className="text-sky-900 font-bold text-3xl mb-14 mt-5 sm:mt-0">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {CardsData.map(({ id, image, title, desc }) => (
            <div
              key={id}
              className="relative bg-sky-200 text-sky-400 shadow-md hover:shadow-2xl rounded-lg overflow-hidden group"
            >
              {/* image*/}
              <img
                src={image}
                alt={title}
                className="w-full h-[200px] object-cover"
              />

              {/* the text under the image*/}
              <div className="p-12 space-y-2">
                <h2 className="text-xl font-bold text-sky-800">{title}</h2>
                <p className="text-gray-800 text-sm">{desc}</p>
              </div>

              {/* overlay card*/}
              <div className="absolute left-0 top-[-100%] group-hover:top-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center duration-700 z-10">
                <Slide cascade>
                  <div className="text-center text-white space-y-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <Fade cascade damping={0.05}>
                      <p>{desc}</p>
                    </Fade>

                    <button className="border border-white p-3 rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_white] duration-300 group">
                      <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 duration-300" />
                    </button>
                  </div>
                </Slide>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
