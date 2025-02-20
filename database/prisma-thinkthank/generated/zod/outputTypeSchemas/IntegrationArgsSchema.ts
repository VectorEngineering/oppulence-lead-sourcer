import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { IntegrationSelectSchema } from '../inputTypeSchemas/IntegrationSelectSchema'
import { IntegrationIncludeSchema } from '../inputTypeSchemas/IntegrationIncludeSchema'

export const IntegrationArgsSchema: z.ZodType<Prisma.IntegrationDefaultArgs> = z
    .object({
        select: z.lazy(() => IntegrationSelectSchema).optional(),
        include: z.lazy(() => IntegrationIncludeSchema).optional()
    })
    .strict()

export default IntegrationArgsSchema
