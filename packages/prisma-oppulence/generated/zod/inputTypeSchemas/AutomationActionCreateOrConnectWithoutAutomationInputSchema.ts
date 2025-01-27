import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { AutomationActionWhereUniqueInputSchema } from './AutomationActionWhereUniqueInputSchema'
import { AutomationActionCreateWithoutAutomationInputSchema } from './AutomationActionCreateWithoutAutomationInputSchema'
import { AutomationActionUncheckedCreateWithoutAutomationInputSchema } from './AutomationActionUncheckedCreateWithoutAutomationInputSchema'

export const AutomationActionCreateOrConnectWithoutAutomationInputSchema: z.ZodType<Prisma.AutomationActionCreateOrConnectWithoutAutomationInput> =
    z
        .object({
            where: z.lazy(() => AutomationActionWhereUniqueInputSchema),
            create: z.union([
                z.lazy(() => AutomationActionCreateWithoutAutomationInputSchema),
                z.lazy(() => AutomationActionUncheckedCreateWithoutAutomationInputSchema)
            ])
        })
        .strict()

export default AutomationActionCreateOrConnectWithoutAutomationInputSchema
