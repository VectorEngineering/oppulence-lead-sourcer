import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadIncludeSchema } from '../inputTypeSchemas/LeadIncludeSchema'
import { LeadWhereInputSchema } from '../inputTypeSchemas/LeadWhereInputSchema'
import { LeadOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadOrderByWithRelationInputSchema'
import { LeadWhereUniqueInputSchema } from '../inputTypeSchemas/LeadWhereUniqueInputSchema'
import { LeadScalarFieldEnumSchema } from '../inputTypeSchemas/LeadScalarFieldEnumSchema'
import { EndpointArgsSchema } from './EndpointArgsSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LeadSelectSchema: z.ZodType<Prisma.LeadSelect> = z
    .object({
        id: z.boolean().optional(),
        endpointId: z.boolean().optional(),
        data: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        endpoint: z.union([z.boolean(), z.lazy(() => EndpointArgsSchema)]).optional()
    })
    .strict()

export const LeadFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LeadFindFirstOrThrowArgs> = z
    .object({
        select: LeadSelectSchema.optional(),
        include: LeadIncludeSchema.optional(),
        where: LeadWhereInputSchema.optional(),
        orderBy: z.union([LeadOrderByWithRelationInputSchema.array(), LeadOrderByWithRelationInputSchema]).optional(),
        cursor: LeadWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional(),
        distinct: z.union([LeadScalarFieldEnumSchema, LeadScalarFieldEnumSchema.array()]).optional()
    })
    .strict()

export default LeadFindFirstOrThrowArgsSchema
