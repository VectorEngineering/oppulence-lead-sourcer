import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitCreateWithoutAssessmentsInputSchema } from './LeadProductFitCreateWithoutAssessmentsInputSchema'
import { LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema } from './LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema'
import { LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema } from './LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema'
import { LeadProductFitWhereUniqueInputSchema } from './LeadProductFitWhereUniqueInputSchema'

export const LeadProductFitCreateNestedOneWithoutAssessmentsInputSchema: z.ZodType<Prisma.LeadProductFitCreateNestedOneWithoutAssessmentsInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadProductFitCreateWithoutAssessmentsInputSchema),
                    z.lazy(() => LeadProductFitUncheckedCreateWithoutAssessmentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => LeadProductFitCreateOrConnectWithoutAssessmentsInputSchema).optional(),
            connect: z.lazy(() => LeadProductFitWhereUniqueInputSchema).optional()
        })
        .strict()

export default LeadProductFitCreateNestedOneWithoutAssessmentsInputSchema
