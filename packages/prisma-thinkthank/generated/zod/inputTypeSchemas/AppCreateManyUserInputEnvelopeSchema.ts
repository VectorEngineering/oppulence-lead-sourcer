import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AppCreateManyUserInputSchema } from './AppCreateManyUserInputSchema'

export const AppCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AppCreateManyUserInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => AppCreateManyUserInputSchema), z.lazy(() => AppCreateManyUserInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default AppCreateManyUserInputEnvelopeSchema
