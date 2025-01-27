import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { IntegrationCountOutputTypeSelectSchema } from './IntegrationCountOutputTypeSelectSchema'

export const IntegrationCountOutputTypeArgsSchema: z.ZodType<Prisma.IntegrationCountOutputTypeDefaultArgs> = z
    .object({
        select: z.lazy(() => IntegrationCountOutputTypeSelectSchema).nullish()
    })
    .strict()

export default IntegrationCountOutputTypeSelectSchema
