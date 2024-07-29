import React from "react";
import Capabilitis from "./Capabilitis";

const HomePage = () => {
  return (
    <>
      <div className="h-screen content-around">
        <div className="text-center p-10">
          <h1 className="font-extrabold text-5xl">Filip Masarik</h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="mockup-code mb-60 shadow-lg shadow-primary">
            <pre data-prefix=">" className="text-warning">
              <code>
                Full-time student at{" "}
                <a
                  className="link link-primary"
                  href="https://www.fiit.stuba.sk/"
                >
                  FIIT
                </a>
              </code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Currently discovering world of web3 </code>
            </pre>
          </div>
        </div>
      </div>

      <Capabilitis />
    </>
  );
};

export default HomePage;
