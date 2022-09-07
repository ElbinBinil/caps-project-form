import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.imgbanner}>
        <img
          src={
            "https://lh3.googleusercontent.com/XQ2HNg-06YyR4SQDT-C6hQzcZutPpIQVAPpqoYLxN1knFek6mSuyGp19t-Vr7O1ASew9lGJOjHdqFnirZ_S7rpE=w16383"
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
