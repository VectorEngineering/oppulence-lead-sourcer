import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { StageRequiredFieldUpdateManyMutationInputSchema } from '../inputTypeSchemas/StageRequiredFieldUpdateManyMutationInputSchema'
import { StageRequiredFieldUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/StageRequiredFieldUncheckedUpdateManyInputSchema'
import { StageRequiredFieldWhereInputSchema } from '../inputTypeSchemas/StageRequiredFieldWhereInputSchema'

export const StageRequiredFieldUpdateManyArgsSchema: z.ZodType<Prisma.StageRequiredFieldUpdateManyArgs> = z
    .object({
        data: z.union([StageRequiredFieldUpdateManyMutationInputSchema, StageRequiredFieldUncheckedUpdateManyInputSchema]),
        where: StageRequiredFieldWhereInputSchema.optional()
    })
    .strict()

export default StageRequiredFieldUpdateManyArgsSchema
