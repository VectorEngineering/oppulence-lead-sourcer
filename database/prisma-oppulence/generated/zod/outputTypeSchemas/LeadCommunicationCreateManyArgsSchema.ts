import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadCommunicationCreateManyInputSchema } from '../inputTypeSchemas/LeadCommunicationCreateManyInputSchema'

export const LeadCommunicationCreateManyArgsSchema: z.ZodType<Prisma.LeadCommunicationCreateManyArgs> = z
    .object({
        data: z.union([LeadCommunicationCreateManyInputSchema, LeadCommunicationCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadCommunicationCreateManyArgsSchema
