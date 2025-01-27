import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { AutomationActionUpdateManyMutationInputSchema } from '../inputTypeSchemas/AutomationActionUpdateManyMutationInputSchema'
import { AutomationActionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AutomationActionUncheckedUpdateManyInputSchema'
import { AutomationActionWhereInputSchema } from '../inputTypeSchemas/AutomationActionWhereInputSchema'

export const AutomationActionUpdateManyArgsSchema: z.ZodType<Prisma.AutomationActionUpdateManyArgs> = z
    .object({
        data: z.union([AutomationActionUpdateManyMutationInputSchema, AutomationActionUncheckedUpdateManyInputSchema]),
        where: AutomationActionWhereInputSchema.optional()
    })
    .strict()

export default AutomationActionUpdateManyArgsSchema
