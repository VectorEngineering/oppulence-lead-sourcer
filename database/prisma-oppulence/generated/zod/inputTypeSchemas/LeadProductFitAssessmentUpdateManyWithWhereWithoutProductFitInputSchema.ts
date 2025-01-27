import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitAssessmentScalarWhereInputSchema } from './LeadProductFitAssessmentScalarWhereInputSchema'
import { LeadProductFitAssessmentUpdateManyMutationInputSchema } from './LeadProductFitAssessmentUpdateManyMutationInputSchema'
import { LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInputSchema'

export const LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInput> =
    z
        .object({
            where: z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => LeadProductFitAssessmentUpdateManyMutationInputSchema),
                z.lazy(() => LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitInputSchema)
            ])
        })
        .strict()

export default LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema
