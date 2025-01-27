import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const IntegrationCreateManyProjectInputSchema: z.ZodType<Prisma.IntegrationCreateManyProjectInput> = z
    .object({
        id: z.string().cuid().optional(),
        userId: z.string().optional().nullable(),
        name: z.string(),
        slug: z.string(),
        description: z.string().optional().nullable(),
        readme: z.string().optional().nullable(),
        developer: z.string(),
        website: z.string(),
        logo: z.string().optional().nullable(),
        screenshots: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional(),
        verified: z.boolean().optional(),
        installUrl: z.string().optional().nullable(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional()
    })
    .strict()

export default IntegrationCreateManyProjectInputSchema
