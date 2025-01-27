import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutStageInputSchema } from './DealUpdateWithoutStageInputSchema'
import { DealUncheckedUpdateWithoutStageInputSchema } from './DealUncheckedUpdateWithoutStageInputSchema'

export const DealUpdateWithWhereUniqueWithoutStageInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutStageInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        data: z.union([z.lazy(() => DealUpdateWithoutStageInputSchema), z.lazy(() => DealUncheckedUpdateWithoutStageInputSchema)])
    })
    .strict()

export default DealUpdateWithWhereUniqueWithoutStageInputSchema
