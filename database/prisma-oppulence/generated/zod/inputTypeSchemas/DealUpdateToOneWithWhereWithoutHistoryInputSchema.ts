import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealWhereInputSchema } from './DealWhereInputSchema'
import { DealUpdateWithoutHistoryInputSchema } from './DealUpdateWithoutHistoryInputSchema'
import { DealUncheckedUpdateWithoutHistoryInputSchema } from './DealUncheckedUpdateWithoutHistoryInputSchema'

export const DealUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.DealUpdateToOneWithWhereWithoutHistoryInput> = z
    .object({
        where: z.lazy(() => DealWhereInputSchema).optional(),
        data: z.union([z.lazy(() => DealUpdateWithoutHistoryInputSchema), z.lazy(() => DealUncheckedUpdateWithoutHistoryInputSchema)])
    })
    .strict()

export default DealUpdateToOneWithWhereWithoutHistoryInputSchema
