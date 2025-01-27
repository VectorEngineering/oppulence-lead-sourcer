import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadWhereInputSchema } from './LeadWhereInputSchema'
import { LeadUpdateWithoutLeadTasksInputSchema } from './LeadUpdateWithoutLeadTasksInputSchema'
import { LeadUncheckedUpdateWithoutLeadTasksInputSchema } from './LeadUncheckedUpdateWithoutLeadTasksInputSchema'

export const LeadUpdateToOneWithWhereWithoutLeadTasksInputSchema: z.ZodType<Prisma.LeadUpdateToOneWithWhereWithoutLeadTasksInput> = z
    .object({
        where: z.lazy(() => LeadWhereInputSchema).optional(),
        data: z.union([z.lazy(() => LeadUpdateWithoutLeadTasksInputSchema), z.lazy(() => LeadUncheckedUpdateWithoutLeadTasksInputSchema)])
    })
    .strict()

export default LeadUpdateToOneWithWhereWithoutLeadTasksInputSchema
