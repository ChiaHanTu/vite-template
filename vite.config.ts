import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import { createVitePlugins } from "./build/vite/plugin";
import { wrapperEnv } from "./build/utils";
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir);
}
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const isBuild = command === "build";
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  return {
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve("types") + "/",
        },
        {
          find: "@",
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: ``,
          javascriptEnabled: true,
        },
      },
      postcss: {},
    },
    plugins: createVitePlugins(viteEnv, isBuild),
  };
};
