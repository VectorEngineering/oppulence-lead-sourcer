import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema'
import { DealUncheckedUpdateManyWithoutStageInputSchema } from './DealUncheckedUpdateManyWithoutStageInputSchema'

export const DealUpdateManyWithWhereWithoutStageInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutStageInput> = z
    .object({
        where: z.lazy(() => DealScalarWhereInputSchema),
        data: z.union([z.lazy(() => DealUpdateManyMutationInputSchema), z.lazy(() => DealUncheckedUpdateManyWithoutStageInputSchema)])
    })
    .strict()

export default DealUpdateManyWithWhereWithoutStageInputSchema
