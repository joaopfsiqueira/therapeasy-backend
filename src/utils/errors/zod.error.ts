import { ZodIssue } from 'zod'
import Logger from '../winston/logger'

export function ErrorZodFormat(errors: ZodIssue[]): string {
    const logger = new Logger()
    let errorZod = ''

    errors.forEach((error: ZodIssue) => {
        errorZod += error.message + ', '
    })

    errorZod = errorZod.slice(0, errorZod.length - 2)
    logger.log('info', errorZod)

    return errorZod
}
