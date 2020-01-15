import React from "react";
import { Global, css } from "@emotion/core";

/**
 * Base CSS resets for whole website
 *
 * Default layout could be added here if we want
 */
const Base = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          scroll-behavior: smooth;
        }
        body {
          scroll-behavior: smooth;
          overflow-y: scroll;
          -webkit-overflow-scrolling: touch;
        }
      `}
    />
    {children}
  </>
);

export default Base;
