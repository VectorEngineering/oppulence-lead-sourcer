import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LogIncludeSchema } from '../inputTypeSchemas/LogIncludeSchema'
import { LogWhereUniqueInputSchema } from '../inputTypeSchemas/LogWhereUniqueInputSchema'
import { EndpointArgsSchema } from '../outputTypeSchemas/EndpointArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LogSelectSchema: z.ZodType<Prisma.LogSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        type: z.boolean().optional(),
        postType: z.boolean().optional(),
        message: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export const LogFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LogFindUniqueOrThrowArgs> = z
    .object({
        select: LogSelectSchema.optional(),
        include: LogIncludeSchema.optional(),
        where: LogWhereUniqueInputSchema
    })
    .strict()

export default LogFindUniqueOrThrowArgsSchema
