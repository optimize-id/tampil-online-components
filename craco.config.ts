import { Configuration, container } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import { dependencies } from "./package.json";

const config = {
  webpack: {
    configure: (config: Configuration, { env }: any) => {
      console.log("webpackConfig", config.output);
      config.output!.publicPath = "auto";
      config.plugins!.push(
        new container.ModuleFederationPlugin({
          name: "TampilOnlineComponents",
          filename: "remoteEntry.js",
          exposes: {
            "./Hero": "./src/components/Hero",
            "./Button": "./src/components/Button",
            "./Title": "./src/components/Title",
            "./Section": "./src/components/Section",
            "./Profile": "./src/components/Profile",
            "./ActivityCard": "./src/components/ActivityCard",
            "./Text": "./src/components/Text",
          },
          shared: {
            ...dependencies,
            react: {
              singleton: true,
              requiredVersion: dependencies["react"],
            },
            "react-dom": {
              singleton: true,
              requiredVersion: dependencies["react-dom"],
            },
          },
        })
      );

      config.plugins!.push(
        new CopyPlugin({
          patterns: [{ from: "src/config", to: "config" }],
        })
      );

      return config;
    },
  },
};

export default config;
