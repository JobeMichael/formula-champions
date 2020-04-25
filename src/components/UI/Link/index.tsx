import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface LinkProps {
  children: JSX.Element[] | JSX.Element;
  to: string;
  state?: any;
}

const Link = ({ to, children, state }: LinkProps) => {
  return (
    <RouterLink
      to={{
        pathname: to,
        state: state,
      }}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
