import React from "react";
import { FaTimes, FaRegCircle,FaGrin } from "react-icons/fa";

const Icon = ({ name }) => {
  switch (name) {
    case "circle":
      return <FaRegCircle size={70} className="icons" />;
    case "cross":
      return <FaTimes size={70} className="icons" />;
    default:
      return <FaGrin size={70} className="icons" />;
  }
};

export default Icon;
