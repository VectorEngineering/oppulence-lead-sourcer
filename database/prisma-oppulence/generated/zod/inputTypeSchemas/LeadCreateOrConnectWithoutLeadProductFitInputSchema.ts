import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLeadProductFitInputSchema } from './LeadCreateWithoutLeadProductFitInputSchema'
import { LeadUncheckedCreateWithoutLeadProductFitInputSchema } from './LeadUncheckedCreateWithoutLeadProductFitInputSchema'

export const LeadCreateOrConnectWithoutLeadProductFitInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadProductFitInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCreateWithoutLeadProductFitInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutLeadProductFitInputSchema)
        ])
    })
    .strict()

export default LeadCreateOrConnectWithoutLeadProductFitInputSchema
