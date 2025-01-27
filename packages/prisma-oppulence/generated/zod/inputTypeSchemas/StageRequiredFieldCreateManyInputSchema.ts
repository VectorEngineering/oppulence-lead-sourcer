import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const StageRequiredFieldCreateManyInputSchema: z.ZodType<Prisma.StageRequiredFieldCreateManyInput> = z
    .object({
        id: z.string().cuid().optional(),
        stageId: z.string(),
        fieldName: z.string(),
        errorMessage: z.string().optional().nullable()
    })
    .strict()

export default StageRequiredFieldCreateManyInputSchema
