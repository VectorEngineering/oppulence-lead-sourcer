import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxShareWhereInputSchema } from '../inputTypeSchemas/InboxShareWhereInputSchema'

export const InboxShareDeleteManyArgsSchema: z.ZodType<Prisma.InboxShareDeleteManyArgs> = z
    .object({
        where: InboxShareWhereInputSchema.optional()
    })
    .strict()

export default InboxShareDeleteManyArgsSchema
