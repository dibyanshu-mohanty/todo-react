import styles from "./Button.module.css";
import React from "react";
// import styled from "styled-components";

// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #4444ff;
//   color: white;
//   background: #4444ff;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;
//   &:focus {
//     outline: none;
//   }
//   @media (min-width: 768px) {
//     width: auto;
//   }
//   &:hover,
//   &:active {
//     background: #00008b;
//     border-color: #00008b;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;
const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClickHandler}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};

export default Button;
