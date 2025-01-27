import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadTimelineCreateWithoutLeadInputSchema } from './LeadTimelineCreateWithoutLeadInputSchema'
import { LeadTimelineUncheckedCreateWithoutLeadInputSchema } from './LeadTimelineUncheckedCreateWithoutLeadInputSchema'
import { LeadTimelineCreateOrConnectWithoutLeadInputSchema } from './LeadTimelineCreateOrConnectWithoutLeadInputSchema'
import { LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadTimelineCreateManyLeadInputEnvelopeSchema } from './LeadTimelineCreateManyLeadInputEnvelopeSchema'
import { LeadTimelineWhereUniqueInputSchema } from './LeadTimelineWhereUniqueInputSchema'
import { LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema } from './LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadTimelineScalarWhereInputSchema } from './LeadTimelineScalarWhereInputSchema'

export const LeadTimelineUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadTimelineUncheckedUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadTimelineCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadTimelineCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadTimelineWhereUniqueInputSchema), z.lazy(() => LeadTimelineWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadTimelineWhereUniqueInputSchema), z.lazy(() => LeadTimelineWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadTimelineWhereUniqueInputSchema), z.lazy(() => LeadTimelineWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadTimelineWhereUniqueInputSchema), z.lazy(() => LeadTimelineWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadTimelineUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadTimelineScalarWhereInputSchema), z.lazy(() => LeadTimelineScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadTimelineUncheckedUpdateManyWithoutLeadNestedInputSchema
