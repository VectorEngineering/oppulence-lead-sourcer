import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxLabelWhereInputSchema } from '../inputTypeSchemas/InboxLabelWhereInputSchema'

export const InboxLabelDeleteManyArgsSchema: z.ZodType<Prisma.InboxLabelDeleteManyArgs> = z
    .object({
        where: InboxLabelWhereInputSchema.optional()
    })
    .strict()

export default InboxLabelDeleteManyArgsSchema
