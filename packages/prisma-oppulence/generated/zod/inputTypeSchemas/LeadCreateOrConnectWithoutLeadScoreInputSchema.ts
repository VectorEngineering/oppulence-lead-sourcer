import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLeadScoreInputSchema } from './LeadCreateWithoutLeadScoreInputSchema'
import { LeadUncheckedCreateWithoutLeadScoreInputSchema } from './LeadUncheckedCreateWithoutLeadScoreInputSchema'

export const LeadCreateOrConnectWithoutLeadScoreInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadScoreInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutLeadScoreInputSchema), z.lazy(() => LeadUncheckedCreateWithoutLeadScoreInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutLeadScoreInputSchema
