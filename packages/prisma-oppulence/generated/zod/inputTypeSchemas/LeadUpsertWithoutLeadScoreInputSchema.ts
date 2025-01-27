import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutLeadScoreInputSchema } from './LeadUpdateWithoutLeadScoreInputSchema'
import { LeadUncheckedUpdateWithoutLeadScoreInputSchema } from './LeadUncheckedUpdateWithoutLeadScoreInputSchema'
import { LeadCreateWithoutLeadScoreInputSchema } from './LeadCreateWithoutLeadScoreInputSchema'
import { LeadUncheckedCreateWithoutLeadScoreInputSchema } from './LeadUncheckedCreateWithoutLeadScoreInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadUpsertWithoutLeadScoreInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutLeadScoreInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutLeadScoreInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadScoreInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadScoreInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutLeadScoreInputSchema
