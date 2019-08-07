import React from "react";

import './centred.css';

interface Props {
  children: React.ReactNode
}

const Centred = (props: Props) => {
  return (
    <div className="centred">
      {props.children}
    </div>
  );
};

export default Centred;
