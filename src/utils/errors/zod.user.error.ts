import { ZodIssue } from 'zod'
import Logger from '../winston/logger'

export function ErrorUserFormat(errors: ZodIssue[]): string {
    const logger = new Logger()
    let errorUser = ''

    errors.forEach((error: ZodIssue) => {
        errorUser += error.message + ', '
    })

    errorUser = errorUser.slice(0, errorUser.length - 2)
    logger.log('info', errorUser)

    return errorUser
}
