import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadSocialProfileCreateManyInputSchema } from '../inputTypeSchemas/LeadSocialProfileCreateManyInputSchema'

export const LeadSocialProfileCreateManyArgsSchema: z.ZodType<Prisma.LeadSocialProfileCreateManyArgs> = z
    .object({
        data: z.union([LeadSocialProfileCreateManyInputSchema, LeadSocialProfileCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LeadSocialProfileCreateManyArgsSchema
