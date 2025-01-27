import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUpdateWithoutAssessmentsInputSchema'
import { LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema'
import { LeadProductFitCreateWithoutAssessmentsInputSchema } from './LeadProductFitCreateWithoutAssessmentsInputSchema'
import { LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema'
import { LeadProductFitWhereInputSchema } from './LeadProductFitWhereInputSchema'

export const LeadProductFitUpsertWithoutAssessmentsInputSchema: z.ZodType<Prisma.LeadProductFitUpsertWithoutAssessmentsInput> = z
    .object({
        update: z.union([
            z.lazy(() => LeadProductFitUpdateWithoutAssessmentsInputSchema),
            z.lazy(() => LeadProductFitUncheckedUpdateWithoutAssessmentsInputSchema)
        ]),
        create: z.union([
            z.lazy(() => LeadProductFitCreateWithoutAssessmentsInputSchema),
            z.lazy(() => LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema)
        ]),
        where: z.lazy(() => LeadProductFitWhereInputSchema).optional()
    })
    .strict()

export default LeadProductFitUpsertWithoutAssessmentsInputSchema
