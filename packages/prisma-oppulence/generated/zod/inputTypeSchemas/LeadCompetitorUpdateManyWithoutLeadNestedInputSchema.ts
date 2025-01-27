import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCompetitorCreateWithoutLeadInputSchema } from './LeadCompetitorCreateWithoutLeadInputSchema'
import { LeadCompetitorUncheckedCreateWithoutLeadInputSchema } from './LeadCompetitorUncheckedCreateWithoutLeadInputSchema'
import { LeadCompetitorCreateOrConnectWithoutLeadInputSchema } from './LeadCompetitorCreateOrConnectWithoutLeadInputSchema'
import { LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadCompetitorCreateManyLeadInputEnvelopeSchema } from './LeadCompetitorCreateManyLeadInputEnvelopeSchema'
import { LeadCompetitorWhereUniqueInputSchema } from './LeadCompetitorWhereUniqueInputSchema'
import { LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema } from './LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadCompetitorScalarWhereInputSchema } from './LeadCompetitorScalarWhereInputSchema'

export const LeadCompetitorUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadCompetitorUpdateManyWithoutLeadNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorCreateWithoutLeadInputSchema).array(),
                z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCompetitorCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCompetitorCreateManyLeadInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => LeadCompetitorWhereUniqueInputSchema), z.lazy(() => LeadCompetitorWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => LeadCompetitorWhereUniqueInputSchema), z.lazy(() => LeadCompetitorWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => LeadCompetitorWhereUniqueInputSchema), z.lazy(() => LeadCompetitorWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => LeadCompetitorWhereUniqueInputSchema), z.lazy(() => LeadCompetitorWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => LeadCompetitorUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => LeadCompetitorScalarWhereInputSchema), z.lazy(() => LeadCompetitorScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default LeadCompetitorUpdateManyWithoutLeadNestedInputSchema
