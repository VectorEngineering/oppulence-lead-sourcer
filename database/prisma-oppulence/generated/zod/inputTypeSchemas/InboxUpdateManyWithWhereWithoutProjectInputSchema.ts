import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxScalarWhereInputSchema } from './InboxScalarWhereInputSchema'
import { InboxUpdateManyMutationInputSchema } from './InboxUpdateManyMutationInputSchema'
import { InboxUncheckedUpdateManyWithoutProjectInputSchema } from './InboxUncheckedUpdateManyWithoutProjectInputSchema'

export const InboxUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.InboxUpdateManyWithWhereWithoutProjectInput> = z
    .object({
        where: z.lazy(() => InboxScalarWhereInputSchema),
        data: z.union([z.lazy(() => InboxUpdateManyMutationInputSchema), z.lazy(() => InboxUncheckedUpdateManyWithoutProjectInputSchema)])
    })
    .strict()

export default InboxUpdateManyWithWhereWithoutProjectInputSchema
