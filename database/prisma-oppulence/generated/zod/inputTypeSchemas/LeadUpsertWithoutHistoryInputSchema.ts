import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutHistoryInputSchema } from './LeadUpdateWithoutHistoryInputSchema'
import { LeadUncheckedUpdateWithoutHistoryInputSchema } from './LeadUncheckedUpdateWithoutHistoryInputSchema'
import { LeadCreateWithoutHistoryInputSchema } from './LeadCreateWithoutHistoryInputSchema'
import { LeadUncheckedCreateWithoutHistoryInputSchema } from './LeadUncheckedCreateWithoutHistoryInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.LeadUpsertWithoutHistoryInput> = z
    .object({
        update: z.union([z.lazy(() => LeadUpdateWithoutHistoryInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutHistoryInputSchema)]),
        create: z.union([z.lazy(() => LeadCreateWithoutHistoryInputSchema), z.lazy(() => LeadUncheckedCreateWithoutHistoryInputSchema)]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutHistoryInputSchema
