import React from "react";

interface Props {
  children: React.ReactNode;
}

const CapabilityCard = ({ children }: Props) => {
  return (
    <div className="card bg-neutral text-neutral-content w-96 m-8">
      <div className="card-body items-center text-center">{children}</div>
    </div>
  );
};

export default CapabilityCard;
