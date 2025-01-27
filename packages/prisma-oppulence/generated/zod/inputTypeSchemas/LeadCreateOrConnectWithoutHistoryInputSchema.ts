import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutHistoryInputSchema } from './LeadCreateWithoutHistoryInputSchema'
import { LeadUncheckedCreateWithoutHistoryInputSchema } from './LeadUncheckedCreateWithoutHistoryInputSchema'

export const LeadCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutHistoryInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutHistoryInputSchema), z.lazy(() => LeadUncheckedCreateWithoutHistoryInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutHistoryInputSchema
