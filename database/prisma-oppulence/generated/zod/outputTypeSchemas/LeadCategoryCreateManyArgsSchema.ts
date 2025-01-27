import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCategoryCreateManyInputSchema } from '../inputTypeSchemas/LeadCategoryCreateManyInputSchema'

export const LeadCategoryCreateManyArgsSchema: z.ZodType<Prisma.LeadCategoryCreateManyArgs> = z
    .object({
        data: z.union([LeadCategoryCreateManyInputSchema, LeadCategoryCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCategoryCreateManyArgsSchema
