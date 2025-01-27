import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutHistoryInputSchema } from './LeadUpdateWithoutHistoryInputSchema'
import { LeadUncheckedUpdateWithoutHistoryInputSchema } from './LeadUncheckedUpdateWithoutHistoryInputSchema'

export const LeadUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutHistoryInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutHistoryInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutHistoryInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutHistoryInputSchema
