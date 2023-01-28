import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
        body {
          font-size: 16px;
          padding: 0 !important;
        }
        body * {
          font-family: "Open Sans";
        }
        img {
          max-width: 100%;
        }
      `}
    />
  );
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle];
