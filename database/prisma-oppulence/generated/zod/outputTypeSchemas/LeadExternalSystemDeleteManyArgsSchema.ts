import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadExternalSystemWhereInputSchema } from '../inputTypeSchemas/LeadExternalSystemWhereInputSchema'

export const LeadExternalSystemDeleteManyArgsSchema: z.ZodType<Prisma.LeadExternalSystemDeleteManyArgs> = z
    .object({
        where: LeadExternalSystemWhereInputSchema.optional()
    })
    .strict()

export default LeadExternalSystemDeleteManyArgsSchema
