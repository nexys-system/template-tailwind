import React from "react";

const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
  <div className="max-w-7xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow">
    {children}
  </div>
);

export default Card;
