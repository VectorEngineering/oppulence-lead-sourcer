import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'
import { DealUpdateManyMutationInputSchema } from './DealUpdateManyMutationInputSchema'
import { DealUncheckedUpdateManyWithoutProjectInputSchema } from './DealUncheckedUpdateManyWithoutProjectInputSchema'

export const DealUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.DealUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DealScalarWhereInputSchema),
        data: z.union([z.lazy(() => DealUpdateManyMutationInputSchema), z.lazy(() => DealUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default DealUpdateManyWithWhereWithoutProjectInputSchema
