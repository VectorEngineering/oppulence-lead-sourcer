import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { EndpointSelectSchema } from '../inputTypeSchemas/EndpointSelectSchema'
import { EndpointIncludeSchema } from '../inputTypeSchemas/EndpointIncludeSchema'

export const EndpointArgsSchema: z.ZodType<Prisma.EndpointDefaultArgs> = z
    .object({
        select: z.lazy(() => EndpointSelectSchema).optional(),
        include: z.lazy(() => EndpointIncludeSchema).optional()
    })
    .strict()

export default EndpointArgsSchema
