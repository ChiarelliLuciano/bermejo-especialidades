import React from "react";

export default function Title({ title, subtitle }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div></div>
      <h3>{subtitle}</h3>
    </div>
  );
}
