import React from "react";
import CapabilityCard from "./CapabilityCard";

const Capabilitis = () => {
  return (
    <>
      <div className="flex justify-center pb-10">
        <h1 className="font-extrabold text-4xl">Capabilities</h1>
      </div>

      <div className="flex flex-wrap justify-center">
        <CapabilityCard>
          <h2 className="text-2xl font-bold">Frontend</h2>
          <p>React/NextJs/TS - web</p>
          <p>.Net MAUI/C#/Blazor - Mobile and Desktop</p>
        </CapabilityCard>
        <CapabilityCard>
          <h2 className="text-2xl font-bold">Backend</h2>
          <p>Asp.Net Core/C#</p>
          <p>Postgres/MSSQL/Azure/Vercel</p>
          <p>Entity Framework and SQL</p>
        </CapabilityCard>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center flex-wrap pb-3">
        <CapabilityCard>
          <h2 className="text-2xl font-bold">GameDev</h2>
          <p>Unity Game engine and C#</p>
        </CapabilityCard>
        <CapabilityCard>
          <h2 className="text-2xl font-bold">Blockchain</h2>
          <p>Solidity and Foundry</p>
        </CapabilityCard>
      </div>
    </>
  );
};

export default Capabilitis;
