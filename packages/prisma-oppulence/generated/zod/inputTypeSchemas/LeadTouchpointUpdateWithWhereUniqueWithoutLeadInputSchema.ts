import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTouchpointWhereUniqueInputSchema } from './LeadTouchpointWhereUniqueInputSchema'
import { LeadTouchpointUpdateWithoutLeadInputSchema } from './LeadTouchpointUpdateWithoutLeadInputSchema'
import { LeadTouchpointUncheckedUpdateWithoutLeadInputSchema } from './LeadTouchpointUncheckedUpdateWithoutLeadInputSchema'

export const LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema: z.ZodType<Prisma.LeadTouchpointUpdateWithWhereUniqueWithoutLeadInput> =
    z
        .object({
            where: z.lazy(() => LeadTouchpointWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadTouchpointUpdateWithoutLeadInputSchema),
                z.lazy(() => LeadTouchpointUncheckedUpdateWithoutLeadInputSchema)
            ])
        })
        .strict()

export default LeadTouchpointUpdateWithWhereUniqueWithoutLeadInputSchema
