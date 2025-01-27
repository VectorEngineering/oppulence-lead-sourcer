import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionCreateWithoutAutomationInputSchema } from './AutomationActionCreateWithoutAutomationInputSchema'
import { AutomationActionUncheckedCreateWithoutAutomationInputSchema } from './AutomationActionUncheckedCreateWithoutAutomationInputSchema'
import { AutomationActionCreateOrConnectWithoutAutomationInputSchema } from './AutomationActionCreateOrConnectWithoutAutomationInputSchema'
import { AutomationActionCreateManyAutomationInputEnvelopeSchema } from './AutomationActionCreateManyAutomationInputEnvelopeSchema'
import { AutomationActionWhereUniqueInputSchema } from './AutomationActionWhereUniqueInputSchema'

export const AutomationActionCreateNestedManyWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionCreateNestedManyWithoutAutomationInput> =
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
            createMany: z.lazy(() => AutomationActionCreateManyAutomationInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => AutomationActionWhereUniqueInputSchema), z.lazy(() => AutomationActionWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default AutomationActionCreateNestedManyWithoutAutomationInputSchema
