"use client";

import { WaitList } from "./Components/WaitList";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef, useEffect } from "react";
//import { Carousel } from "./Components/Carousel";
import { Card } from "./Components/Card";
import { useScroll, animated } from "@react-spring/web";

export default function Home() {
  const CARDS = 3;
  const ref = useRef(null);
  var pages = 3;
  var waitlist_offset = 2.5;
  var waitlist_size = 0.5;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 800) {
      pages = 2;
      waitlist_offset = 1;
      waitlist_size = 1;
      console.log(pages, waitlist_offset);
    } else {
      pages = 3;
      waitlist_offset = 2;
      waitlist_size = 0.5;
      console.log(pages, waitlist_offset);
    }
  });
  return (
    <div>
      <Parallax pages={pages}>
        <ParallaxLayer
          id="logo-page"
          className="flex flex-col items-center justify-center h-screen w-screen overflow-visible top-0"
          speed={0.5}
          offset={0}
          factor={1}
        >
          <div className="flex flex-col items-center justify-center hover:scale-125 hover:ease-in-out duration-1000">
            <img className="peer max-sm:scale-75" src="/logo.png" />
            <h1 className="text-white text-3xl max-sm:text-sm text-center mb-6 font-semibold">
              a companion for <span className="text-red-600">every</span>{" "}
              question about <span className="text-red-600">every</span> show
            </h1>
            <span style={{ "--i": 1 } as React.CSSProperties} className="wavy">
              ▼
            </span>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.1}
          offset={1}
          factor={1.5}
          className="max-sm:text-base flex flex-col items-center justify-center bg-stone-800"
        >
          <div className="custom-shape-divider-top-1687794491 overflow-visible">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white max-sm:text-2xl text-4xl text-justify mb-10 font-semibold">
                Get Ready to Binge 🎬
              </h1>
            </div>

            <div className="flex flex-col items-center justify-center bg-red-500 rounded-xl font-semibold mb-24 shadow-md shadow-stone-700">
              <p className="text-white p-8 font-inter text-3xl text-justify max-w-2xl">
                We've built a conversational movie & TV AI companion that gives
                spoiler-free, in-depth plot summaries and analyses of the media
                you're watching. Join us on our journey to scale into an LLM
                solution that can answer context-based questions about not just
                other streaming platforms, but any video on the internet!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="grid grid-rows-1 max-sm:grid-cols-1 max-sm:grid-rows-3 grid-cols-3 items-center justify-around text-justify">
              <div className=" shadow-lg shadow-stone-700 max-sm:my-6 rounded-xl bg-red-500 text-white flex flex-col items-center text-center m-6 h-full">
                <h1 className="bottom-4 p-6 max-sm:p-4 font-bold text-2xl max-sm:text-sm">
                  Smart Summaries
                </h1>
                <p className="p-6 font-semibold max-sm:p-4 text-wrap text-xl max-sm:text-sm">
                  Comprehensive, spoiler-free plot summaries in seconds
                </p>
              </div>
              <div className="shadow-lg shadow-stone-700 rounded-xl max-sm:my-6 bg-red-500 text-white flex flex-col items-center text-center m-6 h-full">
                <h1 className="max-sm:p-4 bottom-4 p-6 font-bold text-2xl max-sm:text-sm">
                  In-Depth Analysis
                </h1>
                <p className="max-sm:p-4 p-6 font-semibold text-xl max-sm:text-xs">
                  Understand the deeper meanings and hidden themes in your media
                </p>
              </div>
              <div className="shadow-lg shadow-stone-700 max-sm:my-6 rounded-xl bg-red-500 text-white flex flex-col items-center text-center m-6 h-full">
                <h1 className="max-sm:p-4 bottom-4 p-6 font-bold text-2xl max-sm:text-sm">
                  Endless Learning
                </h1>
                <p className="max-sm:p-4 p-6 font-semibold text-xl max-sm:text-sm">
                  Engage with NetflixGPT and explore your favorites at your
                  leisure
                </p>
              </div>
            </div>
            <div className="custom-shape-divider-bottom-1687794710 overflow-hidden">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          className="flex items-center justify-center h-screen"
          speed={0.5}
          offset={waitlist_offset}
          factor={waitlist_size}
        >
          <WaitList />
        </ParallaxLayer>
      </Parallax>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
      <script src="https://unpkg.com/trianglify@^4/dist/trianglify.bundle.js"></script>
      <script src="app.js"></script>
    </div>
  );
}
