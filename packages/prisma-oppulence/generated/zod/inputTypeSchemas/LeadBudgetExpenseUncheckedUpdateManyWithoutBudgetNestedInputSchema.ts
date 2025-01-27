import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadBudgetExpenseCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateWithoutBudgetInputSchema'
import { LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema } from './LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema'
import { LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema } from './LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema'
import { LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema } from './LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema'
import { LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema } from './LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema'
import { LeadBudgetExpenseWhereUniqueInputSchema } from './LeadBudgetExpenseWhereUniqueInputSchema'
import { LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema } from './LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema'
import { LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema } from './LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema'
import { LeadBudgetExpenseScalarWhereInputSchema } from './LeadBudgetExpenseScalarWhereInputSchema'

export const LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetNestedInputSchema: z.ZodType<Prisma.LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseCreateWithoutBudgetInputSchema).array(),
                    z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseUncheckedCreateWithoutBudgetInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseCreateOrConnectWithoutBudgetInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseUpsertWithWhereUniqueWithoutBudgetInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => LeadBudgetExpenseCreateManyBudgetInputEnvelopeSchema).optional(),
            set: z
                .union([
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema).array()
                ])
                .optional(),
            disconnect: z
                .union([
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema).array()
                ])
                .optional(),
            delete: z
                .union([
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema).array()
                ])
                .optional(),
            connect: z
                .union([
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema),
                    z.lazy(() => LeadBudgetExpenseWhereUniqueInputSchema).array()
                ])
                .optional(),
            update: z
                .union([
                    z.lazy(() => LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseUpdateWithWhereUniqueWithoutBudgetInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema),
                    z.lazy(() => LeadBudgetExpenseUpdateManyWithWhereWithoutBudgetInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([
                    z.lazy(() => LeadBudgetExpenseScalarWhereInputSchema),
                    z.lazy(() => LeadBudgetExpenseScalarWhereInputSchema).array()
                ])
                .optional()
        })
        .strict()

export default LeadBudgetExpenseUncheckedUpdateManyWithoutBudgetNestedInputSchema
