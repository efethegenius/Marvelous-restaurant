import "./App.css";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";
import { About } from "./About";
import { Form } from "./Form";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import { Chef } from "./Chefs";
// import { menu } from "./data";
// import { useState } from "react";
// import React, { Component } from "react";

function Main() {
  return (
    <>
      <Header />
      <Menu />
      <About />
      <Reviews />
      <Form />
      <Footer />
      <div className="creator">
        <h4>
          MARVELOUS RESTAURANT 2021. <br /> CREATED BY EFE SAMUEL
        </h4>
      </div>
    </>
  );
}

export default Main;
