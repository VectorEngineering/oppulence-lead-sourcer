import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxLabelScalarWhereInputSchema } from './InboxLabelScalarWhereInputSchema'
import { InboxLabelUpdateManyMutationInputSchema } from './InboxLabelUpdateManyMutationInputSchema'
import { InboxLabelUncheckedUpdateManyWithoutInboxInputSchema } from './InboxLabelUncheckedUpdateManyWithoutInboxInputSchema'

export const InboxLabelUpdateManyWithWhereWithoutInboxInputSchema: z.ZodType<Prisma.InboxLabelUpdateManyWithWhereWithoutInboxInput> = z
    .object({
        where: z.lazy(() => InboxLabelScalarWhereInputSchema),
        data: z.union([
            z.lazy(() => InboxLabelUpdateManyMutationInputSchema),
            z.lazy(() => InboxLabelUncheckedUpdateManyWithoutInboxInputSchema)
        ])
    })
    .strict()

export default InboxLabelUpdateManyWithWhereWithoutInboxInputSchema
