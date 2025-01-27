import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadUpdateWithoutTouchpointsInputSchema } from './LeadUpdateWithoutTouchpointsInputSchema'
import { LeadUncheckedUpdateWithoutTouchpointsInputSchema } from './LeadUncheckedUpdateWithoutTouchpointsInputSchema'
import { LeadCreateWithoutTouchpointsInputSchema } from './LeadCreateWithoutTouchpointsInputSchema'
import { LeadUncheckedCreateWithoutTouchpointsInputSchema } from './LeadUncheckedCreateWithoutTouchpointsInputSchema'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'

export const LeadUpsertWithoutTouchpointsInputSchema: z.ZodType<Prisma.LeadUpsertWithoutTouchpointsInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadUpdateWithoutTouchpointsInputSchema),
            z.lazy(() => LeadUncheckedUpdateWithoutTouchpointsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadCreateWithoutTouchpointsInputSchema),
            z.lazy(() => LeadUncheckedCreateWithoutTouchpointsInputSchema)
        ]),
        where: z.lazy(() => LeadWhereInputSchema).optional()
    })
    .strict()

export default LeadUpsertWithoutTouchpointsInputSchema
