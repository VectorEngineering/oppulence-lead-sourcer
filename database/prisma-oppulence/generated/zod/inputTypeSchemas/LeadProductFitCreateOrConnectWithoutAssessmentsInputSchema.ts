import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema'
import { LeadProductFitCreateWithoutAssessmentsInputSchema } from './LeadProductFitCreateWithoutAssessmentsInputSchema'
import { LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema'

export const LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema: z.ZodType<Prisma.LeadProductFitCreateOrConnectWithoutAssessmentsInput> =
    z
        .object({
            where: z.lazy(() => LeadProductFitWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => LeadProductFitCreateWithoutAssessmentsInputSchema),
                z.lazy(() => LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema)
            ])
        })
        .strict()

export default LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema
