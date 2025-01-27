import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadProductFitAssessmentCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateWithoutProductFitInputSchema'
import { LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema } from './LeadProductFitAssessmentUncheckedCreateWithoutProductFitInputSchema'
import { LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema } from './LeadProductFitAssessmentCreateOrConnectWithoutProductFitInputSchema'
import { LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema } from './LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema'
import { LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema } from './LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema'
import { LeadProductFitAssessmentWhereUniqueInputSchema } from './LeadProductFitAssessmentWhereUniqueInputSchema'
import { LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema } from './LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema'
import { LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema } from './LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema'
import { LeadProductFitAssessmentScalarWhereInputSchema } from './LeadProductFitAssessmentScalarWhereInputSchema'

export const LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInputSchema: z.ZodType<Prisma.LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInput> =
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
            upsert: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentUpsertWithWhereUniqueWithoutProductFitInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadProductFitAssessmentCreateManyProductFitInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema),
                    z.lazy(() => LeadProductFitAssessmentWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentUpdateWithWhereUniqueWithoutProductFitInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema),
                    z.lazy(() => LeadProductFitAssessmentUpdateManyWithWhereWithoutProductFitInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema),
                    z.lazy(() => LeadProductFitAssessmentScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadProductFitAssessmentUncheckedUpdateManyWithoutProductFitNestedInputSchema
