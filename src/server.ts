import 'dotenv/config' //responsável por importar as variáveis de ambiente do .env e colocar na app.
import HelloWorldController from './controller/helloworld.controller'
import App from './app'
import AppDataSource from './data-source'
import UserService from './domain/user/user.service'
import UserRepository from './domain/user/user.repository'
import UserController from './domain/user/user.controller'

/* Main Function, responsável por juntar TODAS as abstrações (instâncias) e usa-las em seus serviços que esperam receber uma instância de uma classe abstrata.

 Ouuuu, simplesmente rodar a conexão de um banco, executar uma função, etc.
 */
export async function server(): Promise<void> {
    /**
     * Instance of Connections
     */
    const DbConnection = new AppDataSource()

    /**
     * Up connections
     */
    DbConnection.DataSource.initialize().then(async () => {
        console.log('Connection to database established')
    })

    /**
     * Up utils
     */

    /**
     * Inicialização de Repositórios
     */

    const userRepository = new UserRepository(DbConnection.DataSource)

    /**
     * Inicilização das Services
     */
    const userService = new UserService(userRepository)

    /**
     * Inicialização das Controllers
     */
    const controllers = [new HelloWorldController(), new UserController(userService)]
    // const userController = new UserController(userService);

    /**
     * Inicialização do Servidor, o servidor deve receber as controllers a serem carregadas
     */
    const app = new App(controllers).app //acessando a propriedade publica da app que contem o express()

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}

server()
