import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Menu from "./components/Menu";

const App = () => (
  <Router>
    <Menu />
    <AppRoutes />
  </Router>
);

export default App;
