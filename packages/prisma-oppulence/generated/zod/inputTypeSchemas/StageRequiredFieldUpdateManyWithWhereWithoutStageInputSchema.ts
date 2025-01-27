import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldScalarWhereInputSchema } from './StageRequiredFieldScalarWhereInputSchema'
import { StageRequiredFieldUpdateManyMutationInputSchema } from './StageRequiredFieldUpdateManyMutationInputSchema'
import { StageRequiredFieldUncheckedUpdateManyWithoutStageInputSchema } from './StageRequiredFieldUncheckedUpdateManyWithoutStageInputSchema'

export const StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldUpdateManyWithWhereWithoutStageInput> =
    z
        .object({
            where: z.lazy(() => StageRequiredFieldScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => StageRequiredFieldUpdateManyMutationInputSchema),
                z.lazy(() => StageRequiredFieldUncheckedUpdateManyWithoutStageInputSchema)
            ])
        })
        .strict()

export default StageRequiredFieldUpdateManyWithWhereWithoutStageInputSchema
