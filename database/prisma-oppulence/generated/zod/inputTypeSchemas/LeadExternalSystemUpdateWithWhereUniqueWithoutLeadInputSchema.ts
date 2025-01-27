import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemWhereUniqueInputSchema } from './LeadExternalSystemWhereUniqueInputSchema'
import { LeadExternalSystemUpdateWithoutLeadInputSchema } from './LeadExternalSystemUpdateWithoutLeadInputSchema'
import { LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema'

export const LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadExternalSystemUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadExternalSystemUpdateWithWhereUniqueWithoutLeadInputSchema
