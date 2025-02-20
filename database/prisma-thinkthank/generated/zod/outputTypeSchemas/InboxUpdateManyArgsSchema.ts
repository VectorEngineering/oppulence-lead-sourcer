import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxUpdateManyMutationInputSchema } from '../inputTypeSchemas/InboxUpdateManyMutationInputSchema'
import { InboxUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InboxUncheckedUpdateManyInputSchema'
import { InboxWhereInputSchema } from '../inputTypeSchemas/InboxWhereInputSchema'

export const InboxUpdateManyArgsSchema: z.ZodType<Prisma.InboxUpdateManyArgs> = z
    .object({
        data: z.union([InboxUpdateManyMutationInputSchema, InboxUncheckedUpdateManyInputSchema]),
        where: InboxWhereInputSchema.optional()
    })
    .strict()

export default InboxUpdateManyArgsSchema
