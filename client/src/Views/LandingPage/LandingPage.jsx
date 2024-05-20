import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./landingPage.module.css";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className={style.cont}>
      <div className={style.contenedor}>
        <h2 className={style.wc}>Welcome</h2>
        <button className={style.btn} onClick={() => navigate("/home")}>
          HOME
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
