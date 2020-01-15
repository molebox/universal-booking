/** @jsx jsx */
import { jsx } from "theme-ui";
import Base from "../components/base";

/**
 * Default page to get started. Will be main entry point to the website
 */
export default () => (
  <Base>
    <h1
      sx={{
        fontFamily: "heading"
      }}
    >
      Hello!
    </h1>
  </Base>
);
