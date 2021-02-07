import React from "react";
import { FiGithub } from "react-icons/fi";
import { RiReactjsLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        ©BERMEJO HNOS. ESPECIALIDADES S.R.L | Hecho en React
        <RiReactjsLine /> por{" "}
        <a href="https://github.com/ChiarelliLuciano" target="new">
          Lulo
        </a>
        <FiGithub /> | 2021
      </p>
    </div>
  );
}
