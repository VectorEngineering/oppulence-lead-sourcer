import { z } from 'zod'
import type { Prisma } from '@prisma/client'
import { InboxActivityUpdateManyMutationInputSchema } from '../inputTypeSchemas/InboxActivityUpdateManyMutationInputSchema'
import { InboxActivityUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InboxActivityUncheckedUpdateManyInputSchema'
import { InboxActivityWhereInputSchema } from '../inputTypeSchemas/InboxActivityWhereInputSchema'

export const InboxActivityUpdateManyArgsSchema: z.ZodType<Prisma.InboxActivityUpdateManyArgs> = z
    .object({
        data: z.union([InboxActivityUpdateManyMutationInputSchema, InboxActivityUncheckedUpdateManyInputSchema]),
        where: InboxActivityWhereInputSchema.optional()
    })
    .strict()

export default InboxActivityUpdateManyArgsSchema
