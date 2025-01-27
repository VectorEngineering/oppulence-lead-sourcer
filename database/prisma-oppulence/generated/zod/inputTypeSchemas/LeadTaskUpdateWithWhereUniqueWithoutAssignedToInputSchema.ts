import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithoutAssignedToInputSchema } from './LeadTaskUpdateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedUpdateWithoutAssignedToInputSchema } from './LeadTaskUncheckedUpdateWithoutAssignedToInputSchema'

export const LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskUpdateWithWhereUniqueWithoutAssignedToInput> =
    z
        .object({
            where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => LeadTaskUpdateWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskUncheckedUpdateWithoutAssignedToInputSchema)
            ])
        })
        .strict()

export default LeadTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema
