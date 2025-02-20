import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxCreateManyInputSchema } from '../inputTypeSchemas/InboxCreateManyInputSchema'

export const InboxCreateManyArgsSchema: z.ZodType<Prisma.InboxCreateManyArgs> = z
    .object({
        data: z.union([InboxCreateManyInputSchema, InboxCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default InboxCreateManyArgsSchema
