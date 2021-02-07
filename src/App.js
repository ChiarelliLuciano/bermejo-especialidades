import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";
import EmailForm from "./components/EmailForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Productos" component={Rooms} />
        <Route exact path="/Contacto" component={EmailForm} />
        <Route exact path="/Productos/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
