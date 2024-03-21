"use client";
import React, { useState } from "react";
import Home from "./Home";
import Demo from "./Demo";
import RedirectAuthenticated from "./RedirectAuthenticated";

const Landing: React.FC = () => {
 
  return(
    <RedirectAuthenticated>
    <Demo/>
    </RedirectAuthenticated>
  )
};

export default Landing;
