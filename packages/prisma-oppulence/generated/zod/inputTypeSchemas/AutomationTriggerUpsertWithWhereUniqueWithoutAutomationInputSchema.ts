import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerWhereUniqueInputSchema } from './AutomationTriggerWhereUniqueInputSchema'
import { AutomationTriggerUpdateWithoutAutomationInputSchema } from './AutomationTriggerUpdateWithoutAutomationInputSchema'
import { AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema'
import { AutomationTriggerCreateWithoutAutomationInputSchema } from './AutomationTriggerCreateWithoutAutomationInputSchema'
import { AutomationTriggerUncheckedCreateWithoutAutomationInputSchema } from './AutomationTriggerUncheckedCreateWithoutAutomationInputSchema'

export const AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInput> =
    z
        .object({
            where: z.lazy(() => AutomationTriggerWhereUniqueInputSchema),
            update: z.union([
                z.lazy(() => AutomationTriggerUpdateWithoutAutomationInputSchema),
                z.lazy(() => AutomationTriggerUncheckedUpdateWithoutAutomationInputSchema)
            ]),
            create: z.union([
                z.lazy(() => AutomationTriggerCreateWithoutAutomationInputSchema),
                z.lazy(() => AutomationTriggerUncheckedCreateWithoutAutomationInputSchema)
            ])
        })
        .strict()

export default AutomationTriggerUpsertWithWhereUniqueWithoutAutomationInputSchema
