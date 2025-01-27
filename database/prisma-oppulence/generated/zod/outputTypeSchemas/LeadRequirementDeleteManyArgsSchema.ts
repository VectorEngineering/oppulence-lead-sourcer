import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadRequirementWhereInputSchema } from '../inputTypeSchemas/LeadRequirementWhereInputSchema'

export const LeadRequirementDeleteManyArgsSchema: z.ZodType<Prisma.LeadRequirementDeleteManyArgs> = z
    .object({
        where: LeadRequirementWhereInputSchema.optional()
    })
    .strict()

export default LeadRequirementDeleteManyArgsSchema
