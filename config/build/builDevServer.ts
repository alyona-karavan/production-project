import type { Configuration as DevServerConfigurations } from "webpack-dev-server"
import { BuildOptions } from "./types/config"

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        // static: {
        //     directory: options.paths.build, // Укажите папку для статических файлов
        // },
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}