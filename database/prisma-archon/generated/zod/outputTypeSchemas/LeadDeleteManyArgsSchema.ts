import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadWhereInputSchema } from '../inputTypeSchemas/LeadWhereInputSchema'

export const LeadDeleteManyArgsSchema: z.ZodType<Prisma.LeadDeleteManyArgs> = z
    .object({
        where: LeadWhereInputSchema.optional()
    })
    .strict()

export default LeadDeleteManyArgsSchema
