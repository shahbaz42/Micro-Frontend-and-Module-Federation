import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import * as component from "./components/index";

function View() {
  const [display, setDisplay] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await component.readDisplay();
      setDisplay(result.data.data);
    };
    fetchData();
  }, []);
  return (
    <div id="post-container">
      <div>
        <h1>Blog Posts</h1>
        {display.map((display) => (
          <div class="content">
            <h2>{display.attributes.title}</h2>
            <p>{display.attributes.description}</p>
            <h3>{display.attributes.author}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default View;
