import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxActivityWhereInputSchema } from '../inputTypeSchemas/InboxActivityWhereInputSchema'

export const InboxActivityDeleteManyArgsSchema: z.ZodType<Prisma.InboxActivityDeleteManyArgs> = z
    .object({
        where: InboxActivityWhereInputSchema.optional()
    })
    .strict()

export default InboxActivityDeleteManyArgsSchema
