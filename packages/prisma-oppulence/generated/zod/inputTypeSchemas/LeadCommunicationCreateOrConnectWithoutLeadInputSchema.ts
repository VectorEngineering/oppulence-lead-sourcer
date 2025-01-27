import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCommunicationWhereUniqueInputSchema } from './LeadCommunicationWhereUniqueInputSchema'
import { LeadCommunicationCreateWithoutLeadInputSchema } from './LeadCommunicationCreateWithoutLeadInputSchema'
import { LeadCommunicationUncheckedCreateWithoutLeadInputSchema } from './LeadCommunicationUncheckedCreateWithoutLeadInputSchema'

export const LeadCommunicationCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadCommunicationCreateOrConnectWithoutLeadInput> = z
    .object({
        where: z.lazy(() => LeadCommunicationWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadCommunicationCreateWithoutLeadInputSchema),
            z.lazy(() => LeadCommunicationUncheckedCreateWithoutLeadInputSchema)
        ])
    })
    .strict()

export default LeadCommunicationCreateOrConnectWithoutLeadInputSchema
