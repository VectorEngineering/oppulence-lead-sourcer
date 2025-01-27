import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema'
import { LeadProductFitCreateWithoutLeadInputSchema } from './LeadProductFitCreateWithoutLeadInputSchema'
import { LeadProductFitUncheckedCreateWithoutLeadInputSchema } from './LeadProductFitUncheckedCreateWithoutLeadInputSchema'

export const LeadProductFitCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadProductFitCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadProductFitWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadProductFitCreateWithoutLeadInputSchema),
            z.lazy(() => LeadProductFitUncheckedCreateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadProductFitCreateOrConnectWithoutLeadInputSchema
