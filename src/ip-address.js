import React from "react";
import "./ip-address.css";

function IPAddress(props) {
  return (
    <div>
      <h1>{props.ip}</h1>
      <p>( This is your IP address...probably :P )</p>
    </div>
  );
}

export default IPAddress;
