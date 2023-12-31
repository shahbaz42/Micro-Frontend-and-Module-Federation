import React from "react";
import "./style.css";
function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Info</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li
            style={{
              float: "right",
              marginRight: "20px",
            }}
          >
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Header;
