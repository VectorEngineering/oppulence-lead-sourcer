import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadExternalSystemWhereUniqueInputSchema } from './LeadExternalSystemWhereUniqueInputSchema'
import { LeadExternalSystemUpdateWithoutLeadInputSchema } from './LeadExternalSystemUpdateWithoutLeadInputSchema'
import { LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema'
import { LeadExternalSystemCreateWithoutLeadInputSchema } from './LeadExternalSystemCreateWithoutLeadInputSchema'
import { LeadExternalSystemUncheckedCreateWithoutLeadInputSchema } from './LeadExternalSystemUncheckedCreateWithoutLeadInputSchema'

export const LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadExternalSystemWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadExternalSystemUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadExternalSystemUncheckedUpdateWithoutLeadInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadExternalSystemCreateWithoutLeadInputSchema),
                z.lazy(() => LeadExternalSystemUncheckedCreateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadExternalSystemUpsertWithWhereUniqueWithoutLeadInputSchema
