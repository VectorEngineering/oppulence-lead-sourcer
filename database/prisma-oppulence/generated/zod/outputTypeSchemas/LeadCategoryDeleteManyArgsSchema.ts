import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryWhereInputSchema } from '../inputTypeSchemas/LeadCategoryWhereInputSchema'

export const LeadCategoryDeleteManyArgsSchema: z.ZodType<Prisma.LeadCategoryDeleteManyArgs> = z
    .object({
        where: LeadCategoryWhereInputSchema.optional()
    })
    .strict()

export default LeadCategoryDeleteManyArgsSchema
