import { z } from 'zod'
import type { Prisma } from '@prisma/client'

export const DocumentCountOutputTypeSelectSchema: z.ZodType<Prisma.DocumentCountOutputTypeSelect> = z
    .object({
        Deal: z.boolean().optional(),
        Lead: z.boolean().optional()
    })
    .strict()

export default DocumentCountOutputTypeSelectSchema
