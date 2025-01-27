import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationConditionSelectSchema } from '../inputTypeSchemas/AutomationConditionSelectSchema'
import { AutomationConditionIncludeSchema } from '../inputTypeSchemas/AutomationConditionIncludeSchema'

export const AutomationConditionArgsSchema: z.ZodType<Prisma.AutomationConditionDefaultArgs> = z
    .object({
        select: z.lazy(() => AutomationConditionSelectSchema).optional(),
        include: z.lazy(() => AutomationConditionIncludeSchema).optional()
    })
    .strict()

export default AutomationConditionArgsSchema
