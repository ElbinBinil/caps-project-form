import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.imgbanner}>
        <img
          src={
            "https://lh5.googleusercontent.com/Gvi5LyihlNl_auYc527iHFdFxcD4Pzr0G5JNS1gFq0lC8nVEB1aFE_6YpvnCfZV-qmHQ-AZLcw91_wEU5EDZZjo=w16383"
          }
          height="85"
          width="200"
        />
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
