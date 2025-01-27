import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionCreateWithoutAutomationInputSchema } from './AutomationActionCreateWithoutAutomationInputSchema'
import { AutomationActionUncheckedCreateWithoutAutomationInputSchema } from './AutomationActionUncheckedCreateWithoutAutomationInputSchema'
import { AutomationActionCreateOrConnectWithoutAutomationInputSchema } from './AutomationActionCreateOrConnectWithoutAutomationInputSchema'
import { AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema } from './AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema'
import { AutomationActionCreateManyAutomationInputEnvelopeSchema } from './AutomationActionCreateManyAutomationInputEnvelopeSchema'
import { AutomationActionWhereUniqueInputSchema } from './AutomationActionWhereUniqueInputSchema'
import { AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema } from './AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema'
import { AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema } from './AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema'
import { AutomationActionScalarWhereInputSchema } from './AutomationActionScalarWhereInputSchema'

export const AutomationActionUpdateManyWithoutAutomationNestedInputSchema: z.ZodType<Prisma.AutomationActionUpdateManyWithoutAutomationNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => AutomationActionCreateWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionCreateWithoutAutomationInputSchema).array(),
                    z.lazy(() => AutomationActionUncheckedCreateWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionUncheckedCreateWithoutAutomationInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => AutomationActionCreateOrConnectWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionCreateOrConnectWithoutAutomationInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionUpsertWithWhereUniqueWithoutAutomationInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => AutomationActionCreateManyAutomationInputEnvelopeSchema).optional(),
            set: z
                .union([z.lazy(() => AutomationActionWhereUniqueInputSchema), z.lazy(() => AutomationActionWhereUniqueInputSchema).array()])
                .optional(),
            disconnect: z
                .union([z.lazy(() => AutomationActionWhereUniqueInputSchema), z.lazy(() => AutomationActionWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => AutomationActionWhereUniqueInputSchema), z.lazy(() => AutomationActionWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => AutomationActionWhereUniqueInputSchema), z.lazy(() => AutomationActionWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionUpdateWithWhereUniqueWithoutAutomationInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema),
                    z.lazy(() => AutomationActionUpdateManyWithWhereWithoutAutomationInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => AutomationActionScalarWhereInputSchema), z.lazy(() => AutomationActionScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default AutomationActionUpdateManyWithoutAutomationNestedInputSchema
