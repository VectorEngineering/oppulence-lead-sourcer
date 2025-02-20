import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityScalarWhereInputSchema } from './InboxActivityScalarWhereInputSchema'
import { InboxActivityUpdateManyMutationInputSchema } from './InboxActivityUpdateManyMutationInputSchema'
import { InboxActivityUncheckedUpdateManyWithoutInboxInputSchema } from './InboxActivityUncheckedUpdateManyWithoutInboxInputSchema'

export const InboxActivityUpdateManyWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.InboxActivityUpdateManyWithWhereWithoutInboxInput> =
    z
        .object({
            where: z.lazy(() => InboxActivityScalarWhereInputSchema),
            data: z.union([
                z.lazy(() => InboxActivityUpdateManyMutationInputSchema),
                z.lazy(() => InboxActivityUncheckedUpdateManyWithoutInboxInputSchema)
            ])
        })
        .strict()

export default InboxActivityUpdateManyWithWhereWithoutInboxInputSchema
