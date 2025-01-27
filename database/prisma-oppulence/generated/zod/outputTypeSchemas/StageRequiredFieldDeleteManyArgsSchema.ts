import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldWhereInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereInputSchema'

export const StageRequiredFieldDeleteManyArgsSchema: z.ZodType<Prisma.StageRequiredFieldDeleteManyArgs> = z
    .object({
        where: StageRequiredFieldWhereInputSchema.optional()
    })
    .strict()

export default StageRequiredFieldDeleteManyArgsSchema
