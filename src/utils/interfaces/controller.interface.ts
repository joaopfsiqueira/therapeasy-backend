import { Router } from 'express'

//! todos os controllers devem implementar a interface IController, seja o arquivo que for.
//! A interface IController é um contrato que obriga a implementação de um router. Sim, todos os controllers tem vários métodos. Mas o que é comum a todos eles é o router. Sendo o router as suas rotas.
export interface IController {
    router: Router
}
