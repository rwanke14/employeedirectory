import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./style.css";

function Header() {
  return (
    <Wrapper>
    <div className="card">
      <div className="card-body">
          <h1> Employee Directory </h1>
      </div>
    </div>
    </Wrapper>
  );
}

export default Header;
