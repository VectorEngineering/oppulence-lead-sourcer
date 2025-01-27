import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { LeadMetadataSelectSchema } from '../inputTypeSchemas/LeadMetadataSelectSchema'
import { LeadMetadataIncludeSchema } from '../inputTypeSchemas/LeadMetadataIncludeSchema'

export const LeadMetadataArgsSchema: z.ZodType<Prisma.LeadMetadataDefaultArgs> = z
    .object({
        select: z.lazy(() => LeadMetadataSelectSchema).optional(),
        include: z.lazy(() => LeadMetadataIncludeSchema).optional()
    })
    .strict()

export default LeadMetadataArgsSchema
