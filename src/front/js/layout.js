import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/Home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Title } from "./component/Title";
import { SignUp } from "./pages/SignUp";
import { LogIn } from "./pages/LogIn";
import { SegurosBonpland } from "./pages/Seguros";
import { SolicitudAval } from "./pages/SolicitudAval";
import { SolicitudPoliza } from "./pages/SolicitarPoliza";
import { Verification } from "./pages/Verification";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          {/* <Title /> */}
          {/* <Navbar /> */}
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<LogIn />} path="/log-in" />
            <Route element={<SegurosBonpland />} path="/segurosBonpland" />
            <Route element={<SolicitudAval />} path="//solicitud-aval" />
            <Route element={<Verification />} path="/verification" />
            <Route element={<SolicitudPoliza />} path="/solicitar-poliza" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          {/* <Footer /> */}
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
