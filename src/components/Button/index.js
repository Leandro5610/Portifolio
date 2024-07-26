import React from "react";
import styles from "./styles.module.css"
export default function Button({ text, Icon }) {
    return (
      <a href="">
        <button className={styles.butao}>
          {Icon && <Icon  className={styles.icon} fontSize="large"/>}
          {text}
        </button>
      </a>
    );
  }
  