import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema'
import { LeadProductFitUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUpdateWithoutAssessmentsInputSchema'
import { LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema'

export const LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInputSchema: z.ZodType<Prisma.LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInput> =
    z
        .object({
            where: z.lazy(() => LeadProductFitWhereInputSchema).optional(),
            data: z.union([
                z.lazy(() => LeadProductFitUpdateWithoutAssessmentsInputSchema),
                z.lazy(() => LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema)
            ])
        })
        .strict()

export default LeadProductFitUpdateToOneWithWhereWithoutAssessmentsInputSchema
