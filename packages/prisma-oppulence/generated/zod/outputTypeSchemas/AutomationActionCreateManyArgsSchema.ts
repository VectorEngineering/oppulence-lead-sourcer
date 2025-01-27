import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationActionCreateManyInputSchema } from '../inputTypeSchemas/AutomationActionCreateManyInputSchema'

export const AutomationActionCreateManyArgsSchema: z.ZodType<Prisma.AutomationActionCreateManyArgs> = z
    .object({
        data: z.union([AutomationActionCreateManyInputSchema, AutomationActionCreateManyInputSchema.array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default AutomationActionCreateManyArgsSchema
