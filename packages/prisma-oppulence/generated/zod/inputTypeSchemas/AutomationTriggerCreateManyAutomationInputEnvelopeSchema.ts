import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationTriggerCreateManyAutomationInputSchema } from './AutomationTriggerCreateManyAutomationInputSchema'

export const AutomationTriggerCreateManyAutomationInputEnvelopeSchema: z.ZodType<Prisma.AutomationTriggerCreateManyAutomationInputEnvelope> =
    z
        .object({
            data: z.union([
                z.lazy(() => AutomationTriggerCreateManyAutomationInputSchema),
                z.lazy(() => AutomationTriggerCreateManyAutomationInputSchema).array()
            ]),
            skipDuplicates: z.boolean().optional()
        })
        .strict()

export default AutomationTriggerCreateManyAutomationInputEnvelopeSchema
