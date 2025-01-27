import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadNurturingWhereUniqueInputSchema } from './LeadNurturingWhereUniqueInputSchema'
import { LeadNurturingCreateWithoutLeadInputSchema } from './LeadNurturingCreateWithoutLeadInputSchema'
import { LeadNurturingUncheckedCreateWithoutLeadInputSchema } from './LeadNurturingUncheckedCreateWithoutLeadInputSchema'

export const LeadNurturingCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadNurturingCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadNurturingWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadNurturingCreateWithoutLeadInputSchema),
            z.lazy(() => LeadNurturingUncheckedCreateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadNurturingCreateOrConnectWithoutLeadInputSchema
