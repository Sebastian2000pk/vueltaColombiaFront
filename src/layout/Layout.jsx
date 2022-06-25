import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Navigation from "../components/navigation/Navigation";

const Layout = () => {
  return (
    <div className="layout">
      <BrowserRouter>
        <Navigation />
        
      </BrowserRouter>
    </div>
  );
};

export default Layout;
