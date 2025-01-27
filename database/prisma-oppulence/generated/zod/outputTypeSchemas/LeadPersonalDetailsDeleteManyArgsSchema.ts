import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadPersonalDetailsWhereInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsWhereInputSchema'

export const LeadPersonalDetailsDeleteManyArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsDeleteManyArgs> = z
    .object({
        where: LeadPersonalDetailsWhereInputSchema.optional()
    })
    .strict()

export default LeadPersonalDetailsDeleteManyArgsSchema
