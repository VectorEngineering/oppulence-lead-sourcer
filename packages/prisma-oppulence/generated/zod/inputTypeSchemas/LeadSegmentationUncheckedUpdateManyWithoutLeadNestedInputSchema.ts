import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadSegmentationCreateWithoutLeadInputSchema } from './LeadSegmentationCreateWithoutLeadInputSchema'
import { LeadSegmentationUncheckedCreateWithoutLeadInputSchema } from './LeadSegmentationUncheckedCreateWithoutLeadInputSchema'
import { LeadSegmentationCreateOrConnectWithoutLeadInputSchema } from './LeadSegmentationCreateOrConnectWithoutLeadInputSchema'
import { LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadSegmentationCreateManyLeadInputEnvelopeSchema } from './LeadSegmentationCreateManyLeadInputEnvelopeSchema'
import { LeadSegmentationWhereUniqueInputSchema } from './LeadSegmentationWhereUniqueInputSchema'
import { LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema } from './LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadSegmentationScalarWhereInputSchema } from './LeadSegmentationScalarWhereInputSchema'

export const LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadSegmentationCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadSegmentationCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadSegmentationWhereUniqueInputSchema), z.lazy(() => LeadSegmentationWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadSegmentationWhereUniqueInputSchema), z.lazy(() => LeadSegmentationWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadSegmentationWhereUniqueInputSchema), z.lazy(() => LeadSegmentationWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadSegmentationWhereUniqueInputSchema), z.lazy(() => LeadSegmentationWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadSegmentationUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadSegmentationScalarWhereInputSchema), z.lazy(() => LeadSegmentationScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadSegmentationUncheckedUpdateManyWithoutLeadNestedInputSchema
