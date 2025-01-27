import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadExternalSystemWhereInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereInputSchema'
import { LeadExternalSystemOrderByWithRelationInputSchema } from '../inputTypeSchemas/LeadExternalSystemOrderByWithRelationInputSchema'
import { LeadExternalSystemWhereUniqueInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereUniqueInputSchema'

export const LeadExternalSystemAggregateArgsSchema: z.ZodType<Prisma.LeadExternalSystemAggregateArgs> = z
    .object({
        where: LeadExternalSystemWhereInputSchema.optional(),
        orderBy: z
            .union([LeadExternalSystemOrderByWithRelationInputSchema.array(), LeadExternalSystemOrderByWithRelationInputSchema])
            .optional(),
        cursor: LeadExternalSystemWhereUniqueInputSchema.optional(),
        take: z.number().optional(),
        skip: z.number().optional()
    })
    .strict()

export default LeadExternalSystemAggregateArgsSchema
