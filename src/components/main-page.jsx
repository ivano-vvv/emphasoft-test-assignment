import React from "react";
import "./main-page.css";
import Header from "./header";

export default function MainPage(props) {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__body">
        <section className="main-page__users-section"></section>
        <section className="main-page__form-section"></section>
      </div>
    </div>
  );
}
