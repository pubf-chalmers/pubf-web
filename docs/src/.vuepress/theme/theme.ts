import {ThemeObject} from "vuepress";
import { getDirname, path } from "@vuepress/utils";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export const PubfTheme: (options: any) => ThemeObject = (options) => {
    return {
        name: 'pubf-theme',
        clientConfigFile: path.resolve(__dirname, 'client.ts')
    }
}
