import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxLabelCreateWithoutInboxInputSchema } from './InboxLabelCreateWithoutInboxInputSchema'
import { InboxLabelUncheckedCreateWithoutInboxInputSchema } from './InboxLabelUncheckedCreateWithoutInboxInputSchema'
import { InboxLabelCreateOrConnectWithoutInboxInputSchema } from './InboxLabelCreateOrConnectWithoutInboxInputSchema'
import { InboxLabelCreateManyInboxInputEnvelopeSchema } from './InboxLabelCreateManyInboxInputEnvelopeSchema'
import { InboxLabelWhereUniqueInputSchema } from './InboxLabelWhereUniqueInputSchema'

export const InboxLabelCreateNestedManyWithoutInboxInputSchema: z.ZodType<Prisma.InboxLabelCreateNestedManyWithoutInboxInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxLabelCreateWithoutInboxInputSchema),
                z.lazy(() => InboxLabelCreateWithoutInboxInputSchema).array(),
                z.lazy(() => InboxLabelUncheckedCreateWithoutInboxInputSchema),
                z.lazy(() => InboxLabelUncheckedCreateWithoutInboxInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxLabelCreateOrConnectWithoutInboxInputSchema),
                z.lazy(() => InboxLabelCreateOrConnectWithoutInboxInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxLabelCreateManyInboxInputEnvelopeSchema).optional(),
        connect: z
            .union([z.lazy(() => InboxLabelWhereUniqueInputSchema), z.lazy(() => InboxLabelWhereUniqueInputSchema).array()])
            .optional()
    })
    .strict()

export default InboxLabelCreateNestedManyWithoutInboxInputSchema
