import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemWhereUniqueInputSchema } from './LeadExternalSystemWhereUniqueInputSchema'
import { LeadExternalSystemCreateWithoutLeadInputSchema } from './LeadExternalSystemCreateWithoutLeadInputSchema'
import { LeadExternalSystemUncheckedCreateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedCreateWithoutLeadInputSchema'

export const LeadExternalSystemCreateOrConnectWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemCreateOrConnectWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema),
                z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadExternalSystemCreateOrConnectWithoutLeadInputSchema
