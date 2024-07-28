import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="h-screen content-around">
        <div className="text-center p-10">
          <h1 className="font-extrabold text-5xl">Welcome</h1>
        </div>

        <div className="flex justify-center items-center">
          <div className="mockup-code mb-60">
            <pre data-prefix=">" className="text-warning">
              <code>My name is Filip Masarik</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>
                and currently I am student at{" "}
                <a
                  className="link link-primary"
                  href="https://www.fiit.stuba.sk/"
                >
                  FIIT
                </a>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
