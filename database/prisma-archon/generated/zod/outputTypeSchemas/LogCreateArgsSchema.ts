import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LogIncludeSchema } from '../inputTypeSchemas/LogIncludeSchema'
import { LogCreateInputSchema } from '../inputTypeSchemas/LogCreateInputSchema'
import { LogUncheckedCreateInputSchema } from '../inputTypeSchemas/LogUncheckedCreateInputSchema'
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

export const LogCreateArgsSchema: z.ZodType<Prisma.LogCreateArgs> = z
    .object({
        select: LogSelectSchema.optional(),
        include: LogIncludeSchema.optional(),
        data: z.union([LogCreateInputSchema, LogUncheckedCreateInputSchema])
    })
    .strict()

export default LogCreateArgsSchema
