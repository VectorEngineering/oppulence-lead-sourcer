import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageRequiredFieldUncheckedCreateInputSchema: z.ZodType<Prisma.StageRequiredFieldUncheckedCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        stageId: z.string(),
        fieldName: z.string(),
        errorMessage: z.string().optional().nullable()
    })
    .strict()

export default StageRequiredFieldUncheckedCreateInputSchema
