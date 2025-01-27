import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadMetadataWhereInputSchema } from '../inputTypeSchemas/LeadMetadataWhereInputSchema'

export const LeadMetadataDeleteManyArgsSchema: z.ZodType<Prisma.LeadMetadataDeleteManyArgs> = z
    .object({
        where: LeadMetadataWhereInputSchema.optional()
    })
    .strict()

export default LeadMetadataDeleteManyArgsSchema
