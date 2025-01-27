import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const InboxLabelCreateManyInputSchema: z.ZodType<Prisma.InboxLabelCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        inboxId: z.string(),
        name: z.string(),
        color: z.string().optional().nullable(),
        description: z.string().optional().nullable(),
        metadata: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        icon: z.string().optional().nullable(),
        category: z.string().optional().nullable(),
        priority: z.number().int().optional().nullable(),
        isSystem: z.boolean().optional(),
        isRequired: z.boolean().optional(),
        validFrom: z.coerce.date().optional().nullable(),
        validUntil: z.coerce.date().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        createdBy: z.string().optional().nullable(),
        updatedBy: z.string().optional().nullable()
    })
    .strict()

export default InboxLabelCreateManyInputSchema
