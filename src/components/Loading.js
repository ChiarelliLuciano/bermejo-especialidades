import React from "react";
import loadingGif from "../images/gif/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Cargando productos...</h4>
      <img src={loadingGif} alt=""></img>
    </div>
  );
}
