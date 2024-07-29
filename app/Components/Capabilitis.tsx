import React from "react";

const Capabilitis = () => {
  return (
    <>
      <div className="flex justify-center pb-10">
        <h1 className="font-extrabold text-4xl">Capabilities</h1>
      </div>
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              Backend(asp.net core)
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              Ability to learn any new technology
            </div>
            <div className="divider divider-horizontal"></div>

            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              Frontend(React, .Net MAUI)
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          <div className="flex w-full">
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              Games(Unity)
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
              Blockchain(Foundry and Solidity)
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capabilitis;
