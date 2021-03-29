import React from "react";

function Wrapper(props) {
  return <main className="container-fluid ">{props.children}</main>;
}

export default Wrapper;


