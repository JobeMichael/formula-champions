import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: JSX.Element[] | JSX.Element;
  to: string;
}

const Link = ({ to, children }: LinkProps) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};

export default Link;
