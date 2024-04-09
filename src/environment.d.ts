import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'

// por conta da propriedade "noPropertyAccessFromIndexSignature": true no tsconfig.ts, eu preciso criar uma interface global do .env, ou isso ou usar process.env.[variável]
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly PORT: number
            readonly TIMEZONE: string
            readonly DS_HOST: string
            readonly DS_TYPE: MysqlConnectionOptions['type'] // tive que tipar o DS_TYPE para ser do mesmo tipo que o type do MysqlConnectionOptions, já que o data-source não aceita o type string.
            readonly DS_USERNAME: string
            readonly DS_PASSWORD: string
            readonly DS_DATABASE: string
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
