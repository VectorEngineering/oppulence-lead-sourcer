import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadPersonalDetailsWhereInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsWhereInputSchema'
import { LeadPersonalDetailsOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsOrderByWithRelationInputSchema'
import { LeadPersonalDetailsWhereUniqueInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsWhereUniqueInputSchema'

export const LeadPersonalDetailsAggregateArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsAggregateArgs> = z
    .object({
        where: LeadPersonalDetailsWhereInputSchema.optional(),
        orderBy: z
            .union([LeadPersonalDetailsOrderByWithRelationInputSchema.array(), LeadPersonalDetailsOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadPersonalDetailsWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadPersonalDetailsAggregateArgsSchema
