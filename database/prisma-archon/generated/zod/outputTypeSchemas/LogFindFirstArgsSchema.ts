import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LogIncludeSchema } from '../inputTypeSchemas/LogIncludeSchema'
import { LogWhereInputSchema } from '../inputTypeSchemas/LogWhereInputSchema'
import { LogOrderByWithRelationInputSchema } from '../inputTypeSchemas/LogOrderByWithRelationInputSchema'
import { LogWhereUniqueInputSchema } from '../inputTypeSchemas/LogWhereUniqueInputSchema'
import { LogScalarFieldEnumSchema } from '../inputTypeSchemas/LogScalarFieldEnumSchema'
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

export const LogFindFirstArgsSchema: z.ZodType<Prisma.LogFindFirstArgs> = z
    .object({
        select: LogSelectSchema.optional(),
        include: LogIncludeSchema.optional(),
        where: LogWhereInputSchema.optional(),
        orderBy: z.union([LogOrderByWithRelationInputSchema.array(), LogOrderByWithRelationInputSchema]).optional(),
        cursor: LogWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LogScalarFieldEnumSchema, LogScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LogFindFirstArgsSchema
