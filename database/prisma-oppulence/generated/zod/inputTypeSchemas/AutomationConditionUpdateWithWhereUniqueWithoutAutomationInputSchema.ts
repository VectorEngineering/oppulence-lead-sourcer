import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationConditionWhereUniqueInputSchema } from './AutomationConditionWhereUniqueInputSchema'
import { AutomationConditionUpdateWithoutAutomationInputSchema } from './AutomationConditionUpdateWithoutAutomationInputSchema'
import { AutomationConditionUncheckedUpdateWithoutAutomationInputSchema } from './AutomationConditionUncheckedUpdateWithoutAutomationInputSchema'

export const AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationConditionUpdateWithWhereUniqueWithoutAutomationInput> =
    z
        .object({
            where: z.lazy(() => AutomationConditionWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => AutomationConditionUpdateWithoutAutomationInputSchema),
                z.lazy(() => AutomationConditionUncheckedUpdateWithoutAutomationInputSchema)
            ])
        })
        .strict()

export default AutomationConditionUpdateWithWhereUniqueWithoutAutomationInputSchema
