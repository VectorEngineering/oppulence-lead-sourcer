import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetCreateWithoutLeadInputSchema } from './LeadBudgetCreateWithoutLeadInputSchema'
import { LeadBudgetUncheckedCreateWithoutLeadInputSchema } from './LeadBudgetUncheckedCreateWithoutLeadInputSchema'
import { LeadBudgetCreateOrConnectWithoutLeadInputSchema } from './LeadBudgetCreateOrConnectWithoutLeadInputSchema'
import { LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema } from './LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema'
import { LeadBudgetCreateManyLeadInputEnvelopeSchema } from './LeadBudgetCreateManyLeadInputEnvelopeSchema'
import { LeadBudgetWhereUniqueInputSchema } from './LeadBudgetWhereUniqueInputSchema'
import { LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema } from './LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema'
import { LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema } from './LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema'
import { LeadBudgetScalarWhereInputSchema } from './LeadBudgetScalarWhereInputSchema'

export const LeadBudgetUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.LeadBudgetUncheckedUpdateManyWithoutLeadNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetCreateWithoutLeadInputSchema).array(),
                    z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetUncheckedCreateWithoutLeadInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadBudgetCreateOrConnectWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetCreateOrConnectWithoutLeadInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetUpsertWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadBudgetCreateManyLeadInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => LeadBudgetWhereUniqueInputSchema), z.lazy(() => LeadBudgetWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => LeadBudgetWhereUniqueInputSchema), z.lazy(() => LeadBudgetWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => LeadBudgetWhereUniqueInputSchema), z.lazy(() => LeadBudgetWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => LeadBudgetWhereUniqueInputSchema), z.lazy(() => LeadBudgetWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetUpdateWithWhereUniqueWithoutLeadInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema),
                    z.lazy(() => LeadBudgetUpdateManyWithWhereWithoutLeadInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => LeadBudgetScalarWhereInputSchema), z.lazy(() => LeadBudgetScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default LeadBudgetUncheckedUpdateManyWithoutLeadNestedInputSchema
