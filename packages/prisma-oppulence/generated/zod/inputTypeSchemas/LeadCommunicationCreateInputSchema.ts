import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateNestedOneWithoutCommunicationsInputSchema } from './LeadCreateNestedOneWithoutCommunicationsInputSchema'

export const LeadCommunicationCreateInputSchema: z.ZodType<Prisma.LeadCommunicationCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        type: z.string(),
        direction: z.string(),
        subject: z.string().optional().nullable(),
        content: z.string(),
        outcome: z.string().optional().nullable(),
        duration: z.number().int().optional().nullable(),
        scheduledAt: z.coerce.date().optional().nullable(),
        completedAt: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        lead: z.lazy(() => LeadCreateNestedOneWithoutCommunicationsInputSchema)
    })
    .strict()

export default LeadCommunicationCreateInputSchema
