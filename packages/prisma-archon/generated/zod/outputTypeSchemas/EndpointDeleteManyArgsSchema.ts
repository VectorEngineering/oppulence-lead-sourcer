import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointWhereInputSchema } from '../inputTypeSchemas/EndpointWhereInputSchema'

export const EndpointDeleteManyArgsSchema: z.ZodType<Prisma.EndpointDeleteManyArgs> = z
    .object({
        where: EndpointWhereInputSchema.optional()
    })
    .strict()

export default EndpointDeleteManyArgsSchema
