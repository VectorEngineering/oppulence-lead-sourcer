import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema'
import { InputJsonValueSchema } from './InputJsonValueSchema'

export const InstalledIntegrationCreateManyUserInputSchema: z.ZodType<Prisma.InstalledIntegrationCreateManyUserInput> = z
    .object({
        id: z.string().cuid().optional(),
        integrationId: z.string(),
        projectId: z.string(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        credentials: z.union([z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema]).optional()
    })
    .strict()

export default InstalledIntegrationCreateManyUserInputSchema
