import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadLabelWhereInputSchema } from '../inputTypeSchemas/LeadLabelWhereInputSchema'

export const LeadLabelDeleteManyArgsSchema: z.ZodType<Prisma.LeadLabelDeleteManyArgs> = z
    .object({
        where: LeadLabelWhereInputSchema.optional()
    })
    .strict()

export default LeadLabelDeleteManyArgsSchema
