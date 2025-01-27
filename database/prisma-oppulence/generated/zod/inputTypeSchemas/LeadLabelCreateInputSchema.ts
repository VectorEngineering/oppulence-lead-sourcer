import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutLabelsInputSchema } from './LeadCreateNestedOneWithoutLabelsInputSchema'

export const LeadLabelCreateInputSchema: z.ZodType<Prisma.LeadLabelCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        name: z.string(),
        color: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutLabelsInputSchema)
    })
    .strict()

export default LeadLabelCreateInputSchema
