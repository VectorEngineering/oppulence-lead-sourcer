import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadPersonalDetailsCreateManyInputSchema } from '../inputTypeSchemas/LeadPersonalDetailsCreateManyInputSchema'

export const LeadPersonalDetailsCreateManyArgsSchema: z.ZodType<Prisma.LeadPersonalDetailsCreateManyArgs> = z
    .object({
        data: z.union([LeadPersonalDetailsCreateManyInputSchema, LeadPersonalDetailsCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadPersonalDetailsCreateManyArgsSchema
