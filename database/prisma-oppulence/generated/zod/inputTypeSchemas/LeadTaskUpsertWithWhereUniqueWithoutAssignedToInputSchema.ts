import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskUpdateWithoutAssignedToInputSchema } from './LeadTaskUpdateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedUpdateWithoutAssignedToInputSchema } from './LeadTaskUncheckedUpdateWithoutAssignedToInputSchema'
import { LeadTaskCreateWithoutAssignedToInputSchema } from './LeadTaskCreateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedCreateWithoutAssignedToInputSchema } from './LeadTaskUncheckedCreateWithoutAssignedToInputSchema'

export const LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskUpsertWithWhereUniqueWithoutAssignedToInput> =
    z
        .object({
            where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => LeadTaskUpdateWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskUncheckedUpdateWithoutAssignedToInputSchema)
            ]),
            create: z.union([
                z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema)
            ])
        })
        .strict()

export default LeadTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema
