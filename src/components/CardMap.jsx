import Image from "next/image";
import React, { useState, useEffect } from "react";

export const Card = (product) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/app/api/route")
      .then((response) => response.json())

      .then((data) => setData(data));
    console.log(data);
  }, [data]);
  return (
    <>
      <main>
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3"> */}
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {/* <Image
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/images/1.jpg"
                    alt="blog"
                    width={720}
                    height={400}
                  /> */}
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {props.category || "CATEGORY"}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {props.title || ""}
            </h1>
            <p className="leading-relaxed mb-3">{props.description || ""}</p>
            <div className="flex items-center flex-wrap ">
              <a
                href={props.link || "/"}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                6M
              </span>
            </div>
          </div>
        </div>
        {/* </div>
            </div>
          </div>
        </section> */}
      </main>
    </>
  );
};
