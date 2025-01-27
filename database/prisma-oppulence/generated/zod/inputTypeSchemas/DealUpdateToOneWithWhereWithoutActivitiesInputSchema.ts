import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereInputSchema } from './DealWhereInputSchema'
import { DealUpdateWithoutActivitiesInputSchema } from './DealUpdateWithoutActivitiesInputSchema'
import { DealUncheckedUpdateWithoutActivitiesInputSchema } from './DealUncheckedUpdateWithoutActivitiesInputSchema'

export const DealUpdateToOneWithWhereWithoutActivitiesInputSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutActivitiesInput> = z
    .object({
        where: z.lazy(() => DealWhereInputSchema).optional(),
        data: z.union([z.lazy(() => DealUpdateWithoutActivitiesInputSchema), z.lazy(() => DealUncheckedUpdateWithoutActivitiesInputSchema)])
    })
    .strict()

export default DealUpdateToOneWithWhereWithoutActivitiesInputSchema
