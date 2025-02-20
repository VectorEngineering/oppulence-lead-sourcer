import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { IntegrationWhereInputSchema } from '../inputTypeSchemas/IntegrationWhereInputSchema'

export const IntegrationDeleteManyArgsSchema: z.ZodType<Prisma.IntegrationDeleteManyArgs> = z
    .object({
        where: IntegrationWhereInputSchema.optional()
    })
    .strict()

export default IntegrationDeleteManyArgsSchema
