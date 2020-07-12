import React from "react";
import "normalize.css";
import "./styles/app.css";
import "./styles/typography.css";
import Content from "./components/containers/app__content";

export default function App() {
  return (
    <div className="app">
      <Content className="app__content " />
    </div>
  );
}
