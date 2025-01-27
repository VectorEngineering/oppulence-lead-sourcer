import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageRequiredFieldCreateManyStageInputSchema: z.ZodType<Prisma.StageRequiredFieldCreateManyStageInput> = z
    .object({
        id: z.string().cuid().optional(),
        fieldName: z.string(),
        errorMessage: z.string().optional().nullable()
    })
    .strict()

export default StageRequiredFieldCreateManyStageInputSchema
