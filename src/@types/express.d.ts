declare namespace Express {
    //acessando o namespace da lib express.
    //Atribuindo um novo atributo dentro da interface request dentro de express.
    export interface Request {
        login: string
    }
}
