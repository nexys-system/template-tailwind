import React from "react";
import { github, version } from "../config";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p>
          <a href={github.version}>{version}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
