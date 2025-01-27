import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { StageRequiredFieldWhereUniqueInputSchema } from './StageRequiredFieldWhereUniqueInputSchema'
import { StageRequiredFieldUpdateWithoutStageInputSchema } from './StageRequiredFieldUpdateWithoutStageInputSchema'
import { StageRequiredFieldUncheckedUpdateWithoutStageInputSchema } from './StageRequiredFieldUncheckedUpdateWithoutStageInputSchema'

export const StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema: z.ZodType<Prisma.StageRequiredFieldUpdateWithWhereUniqueWithoutStageInput> =
    z
        .object({
            where: z.lazy(() => StageRequiredFieldWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => StageRequiredFieldUpdateWithoutStageInputSchema),
                z.lazy(() => StageRequiredFieldUncheckedUpdateWithoutStageInputSchema)
            ])
        })
        .strict()

export default StageRequiredFieldUpdateWithWhereUniqueWithoutStageInputSchema
