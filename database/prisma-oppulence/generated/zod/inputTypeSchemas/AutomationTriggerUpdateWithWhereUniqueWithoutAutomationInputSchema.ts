import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerWhereUniqueInputSchema } from './AutomationTriggerWhereUniqueInputSchema'
import { AutomationTriggerUpdateWithoutAutomationInputSchema } from './AutomationTriggerUpdateWithoutAutomationInputSchema'
import { AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema'

export const AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInput> =
    z
        .object({
            where: z.lazy(() => AutomationTriggerWhereUniqueInputSchema),
            data: z.union([
                z.lazy(() => AutomationTriggerUpdateWithoutAutomationInputSchema),
                z.lazy(() => AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema)
            ])
        })
        .strict()

export default AutomationTriggerUpdateWithWhereUniqueWithoutAutomationInputSchema
