import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadCreateWithoutLeadTasksInputSchema } from './LeadCreateWithoutLeadTasksInputSchema'
import { LeadUncheckedCreateWithoutLeadTasksInputSchema } from './LeadUncheckedCreateWithoutLeadTasksInputSchema'

export const LeadCreateOrConnectWithoutLeadTasksInputSchema: z.ZodType<Prisma.LeadCreateOrConnectWithoutLeadTasksInput> = z
    .object({
        where: z.lazy(() => LeadWhereUniqueInputSchema),
        create: z.union([z.lazy(() => LeadCreateWithoutLeadTasksInputSchema), z.lazy(() => LeadUncheckedCreateWithoutLeadTasksInputSchema)])
    })
    .strict()

export default LeadCreateOrConnectWithoutLeadTasksInputSchema
