import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithoutProjectInputSchema } from './DealUpdateWithoutProjectInputSchema'
import { DealUncheckedUpdateWithoutProjectInputSchema } from './DealUncheckedUpdateWithoutProjectInputSchema'

export const DealUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.DealUpdateWithWhereUniqueWithoutProjectInput> = z
    .object({
        where: z.lazy(() => DealWhereUniqueInputSchema),
        data: z.union([z.lazy(() => DealUpdateWithoutProjectInputSchema), z.lazy(() => DealUncheckedUpdateWithoutProjectInputSchema)])
    })
    .strict()

export default DealUpdateWithWhereUniqueWithoutProjectInputSchema
