import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTaskWhereUniqueInputSchema } from './LeadTaskWhereUniqueInputSchema'
import { LeadTaskCreateWithoutAssignedToInputSchema } from './LeadTaskCreateWithoutAssignedToInputSchema'
import { LeadTaskUncheckedCreateWithoutAssignedToInputSchema } from './LeadTaskUncheckedCreateWithoutAssignedToInputSchema'

export const LeadTaskCreateOrConnectWithoutAssignedToInputSchema: z.ZodType<Prisma.LeadTaskCreateOrConnectWithoutAssignedToInput> = z
    .object({
        where: z.lazy(() => LeadTaskWhereUniqueInputSchema),
        create: z.union([
            z.lazy(() => LeadTaskCreateWithoutAssignedToInputSchema),
            z.lazy(() => LeadTaskUncheckedCreateWithoutAssignedToInputSchema)
        ])
    })
    .strict()

export default LeadTaskCreateOrConnectWithoutAssignedToInputSchema
