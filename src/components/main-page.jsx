import React from "react";
import "./main-page.css";
import Header from "./header";
import UsersSectionContainer from "./containers/main-page__users-section";
import FormSectionContainer from "./containers/main-page__form-section";

export default function MainPage(props) {
  return (
    <div className={"main-page " + props.className}>
      <Header className="main-page__header" />
      <div className="main-page__body container">
        <UsersSectionContainer className="main-page__users-section main-page__section" />
        <FormSectionContainer className="main-page__form-section main-page__section" />
      </div>
    </div>
  );
}
