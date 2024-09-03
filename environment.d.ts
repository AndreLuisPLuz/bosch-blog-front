declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: "development" | "production",
            API_HOST: "locahost" | string,
            API_PORT: "8080" | string,
            API_PREFIX: "api/v1" | string
        }
    }
}

export {};