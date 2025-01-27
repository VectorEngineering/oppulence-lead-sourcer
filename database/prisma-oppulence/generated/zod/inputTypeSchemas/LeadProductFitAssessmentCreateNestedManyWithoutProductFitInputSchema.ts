import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitAssessmentCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateWithoutProductFitInputSchema'
import { LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema'
import { LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema'
import { LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema } from './LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from './LeadProductFitAssessmentWhereUniqueInputSchema'

export const LeadProductFitAssessmentCreateNestedManyWithoutProductFitInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentCreateNestedManyWithoutProductFitInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentCreateWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentCreateWithoutProductFitInputSchema).array(),
                    z.lazy(() => LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema).optional(),
            connect: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadProductFitAssessmentCreateNestedManyWithoutProductFitInputSchema
