import 'dotenv/config' //responsável por importar as variáveis de ambiente do .env e colocar na app.
import HelloWorldController from './controller/helloworld.controller'
import App from './app'
import AppDataSource from './data-source'
import PersonService from './domain/people/person/person.service'
import PersonController from './domain/people/person/person.controller'
import AuthService from './domain/auth/auth.service'
import AuthController from './domain/auth/auth.controller'
import Repositories from './repository/repositories'
import AuthMiddleware from './middleware/auth.middleware'
import DoctorService from './domain/people/doctors/doctor.service'
import DoctorController from './domain/people/doctors/doctor.controller'
import UserController from './domain/people/user/user.controller'
import UserService from './domain/people/user/user.service'
import PatientController from './domain/people/patients/patient.controller'
import PatientService from './domain/people/patients/patient.service'
import QuestionnaireController from './domain/questions/questionnaire/questionnaire.controller'
import QuestionnaireService from './domain/questions/questionnaire/questionnaire.service'
import TopicController from './domain/questions/topic/topic.controller'
import TopicService from './domain/questions/topic/topic.service'
import QuestionService from './domain/questions/question/question.service'
import OptionAnswerService from './domain/questions/optionAnswer/optionAnswer.service'
import QuestionController from './domain/questions/question/question.controller'
import OptionAnswerController from './domain/questions/optionAnswer/optionAnswer.controller'
import PatientTopicService from './domain/questions/patientTopic/patientTopic.service'
import PatientTopicController from './domain/questions/patientTopic/patientTopic.controller'
import QuestionTopicService from './domain/questions/questionTopic/questionTopic.service'
import QuestionTopicController from './domain/questions/questionTopic/questionTopic.controller'

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
    const authMiddleware = new AuthMiddleware()

    /**
     * Inicialização de Repositórios
     */

    const repositories = new Repositories(DbConnection.DataSource) //acessando o atributo publico da classe Repositories

    /**
     * Inicilização das Services
     */
    const peopleService = new PersonService(repositories)
    const authService = new AuthService(repositories)
    const doctorService = new DoctorService(repositories)
    const userService = new UserService(repositories)
    const patientsService = new PatientService(repositories)
    const questionnaireService = new QuestionnaireService(repositories)
    const topicService = new TopicService(repositories)
    const questionService = new QuestionService(repositories)
    const optionAnswerService = new OptionAnswerService(repositories)
    const patientTopicService = new PatientTopicService(repositories)
    const questionTopicService = new QuestionTopicService(repositories)

    /**
     * Inicialização das Controllers
     */
    const controllers = [
        new HelloWorldController(),
        new PersonController(peopleService, authMiddleware),
        new AuthController(authService),
        new DoctorController(doctorService, authMiddleware),
        new UserController(userService, authMiddleware),
        new PatientController(patientsService, authMiddleware),
        new QuestionnaireController(questionnaireService),
        new TopicController(topicService),
        new QuestionController(questionService),
        new OptionAnswerController(optionAnswerService),
        new PatientTopicController(patientTopicService),
        new QuestionTopicController(questionTopicService),
    ]
    // const userController = new PersonController(peopleService);

    /**
     * Inicialização do Servidor, o servidor deve receber as controllers a serem carregadas
     */
    const app = new App(controllers).app //acessando a propriedade publica da app que contem o express()

    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`)
    })
}

server()
