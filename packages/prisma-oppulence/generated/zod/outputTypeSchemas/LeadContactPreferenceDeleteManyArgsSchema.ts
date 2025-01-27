import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadContactPreferenceWhereInputSchema } from '../inputTypeSchemas/LeadContactPreferenceWhereInputSchema'

export const LeadContactPreferenceDeleteManyArgsSchema: z.ZodType<Prisma.LeadContactPreferenceDeleteManyArgs> = z
    .object({
        where: LeadContactPreferenceWhereInputSchema.optional()
    })
    .strict()

export default LeadContactPreferenceDeleteManyArgsSchema
