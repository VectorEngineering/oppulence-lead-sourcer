import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadRequirementWhereUniqueInputSchema } from './LeadRequirementWhereUniqueInputSchema'
import { LeadRequirementCreateWithoutLeadInputSchema } from './LeadRequirementCreateWithoutLeadInputSchema'
import { LeadRequirementUncheckedCreateWithoutLeadInputSchema } from './LeadRequirementUncheckedCreateWithoutLeadInputSchema'

export const LeadRequirementCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadRequirementCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadRequirementWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadRequirementCreateWithoutLeadInputSchema),
            z.lazy(() => LeadRequirementUncheckedCreateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadRequirementCreateOrConnectWithoutLeadInputSchema
