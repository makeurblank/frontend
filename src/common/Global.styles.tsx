import { Global, css } from '@emotion/react';

export default function GlobalStyle(): JSX.Element {
  return (
    <Global styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `}
    />
  );
}
