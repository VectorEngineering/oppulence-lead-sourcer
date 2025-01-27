import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationConditionWhereUniqueInputSchema } from './AutomationConditionWhereUniqueInputSchema'
import { AutomationConditionCreateWithoutAutomationInputSchema } from './AutomationConditionCreateWithoutAutomationInputSchema'
import { AutomationConditionUncheckedCreateWithoutAutomationInputSchema } from './AutomationConditionUncheckedCreateWithoutAutomationInputSchema'

export const AutomationConditionCreateOrConnectWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationConditionCreateOrConnectWithoutAutomationInput> =
    z
        .object({
            where: z.lazy(() => AutomationConditionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => AutomationConditionCreateWithoutAutomationInputSchema),
                z.lazy(() => AutomationConditionUncheckedCreateWithoutAutomationInputSchema)
            ])
        })
        .strict()

export default AutomationConditionCreateOrConnectWithoutAutomationInputSchema
