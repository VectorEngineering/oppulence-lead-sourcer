import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadDecisionMakerCreateWithoutLeadInputSchema } from './LeadDecisionMakerCreateWithoutLeadInputSchema'
import { LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema } from './LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema'
import { LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema } from './LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema'
import { LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadDecisionMakerCreateManyLeadInputEnvelopeSchema } from './LeadDecisionMakerCreateManyLeadInputEnvelopeSchema'
import { LeadDecisionMakerWhereUniqueInputSchema } from './LeadDecisionMakerWhereUniqueInputSchema'
import { LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema } from './LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadDecisionMakerScalarWhereInputSchema } from './LeadDecisionMakerScalarWhereInputSchema'

export const LeadDecisionMakerUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadDecisionMakerUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadDecisionMakerCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema),
                    z.lazy(() => LeadDecisionMakerWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadDecisionMakerUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadDecisionMakerScalarWhereInputSchema),
                    z.lazy(() => LeadDecisionMakerScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadDecisionMakerUpdateManyWithoutLeadNestedInputSchema
