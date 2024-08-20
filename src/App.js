import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes";
import Menu from "./components/Menu";
import { ModalProvider } from "./context/ModalContext";


const App = () => (
  <ModalProvider>
    <Router>
      <Menu />
      <AppRoutes />
    </Router>
  </ModalProvider>
);

export default App;
