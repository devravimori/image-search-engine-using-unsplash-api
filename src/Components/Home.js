import React from "react";
import SearchBox from "./SearchBox";

import "./../css/style.css";

function Home() {
  return (
    <div className="w-full h-screen hero">
      <div className="w-full h-screen bg-gray-900/60">
        <div className="container max-w-4xl md:mx-auto h-10">
          <div className="h-screen mx-5">
            <h1 className="pt-48 text-4xl text-white font-semibold mb-4">
              Unsplash
            </h1>
            <p className="text-gray-200 mb-2">
              The Powerful Search engine of stunning free and royalty free
              images.
            </p>
            <p className="text-gray-200 mb-4 text-xs">
              Powered by{" "}
              <a href="https://unsplash.com" className="underline">
                Unsplash api
              </a>
              .
            </p>
            <SearchBox />
            <footer className=" text-gray-200 pt-4">
              <span className="text-sm text-center dark:text-gray-400">
                Developed with ❤️ By {" "}
                <a
                  href="https://optimumitapps.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Optimumitapps
                </a>
                .
              </span>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
