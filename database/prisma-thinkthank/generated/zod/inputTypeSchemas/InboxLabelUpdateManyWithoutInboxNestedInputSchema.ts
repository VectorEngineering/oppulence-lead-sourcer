import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxLabelCreateWithoutInboxInputSchema } from './InboxLabelCreateWithoutInboxInputSchema'
import { InboxLabelUncheckedCreateWithoutInboxInputSchema } from './InboxLabelUncheckedCreateWithoutInboxInputSchema'
import { InboxLabelCreateOrConnectWithoutInboxInputSchema } from './InboxLabelCreateOrConnectWithoutInboxInputSchema'
import { InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema } from './InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema'
import { InboxLabelCreateManyInboxInputEnvelopeSchema } from './InboxLabelCreateManyInboxInputEnvelopeSchema'
import { InboxLabelWhereUniqueInputSchema } from './InboxLabelWhereUniqueInputSchema'
import { InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema } from './InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema'
import { InboxLabelUpdateManyWithWhereWithoutInboxInputSchema } from './InboxLabelUpdateManyWithWhereWithoutInboxInputSchema'
import { InboxLabelScalarWhereInputSchema } from './InboxLabelScalarWhereInputSchema'

export const InboxLabelUpdateManyWithoutInboxNestedInputSchema: z.ZodType<Prisma.InboxLabelUpdateManyWithoutInboxNestedInput> = z
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
        upsert: z
            .union([
                z.lazy(() => InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema),
                z.lazy(() => InboxLabelUpsertWithWhereUniqueWithoutInboxInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxLabelCreateManyInboxInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => InboxLabelWhereUniqueInputSchema), z.lazy(() => InboxLabelWhereUniqueInputSchema).array()]).optional(),
        disconnect: z
            .union([z.lazy(() => InboxLabelWhereUniqueInputSchema), z.lazy(() => InboxLabelWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => InboxLabelWhereUniqueInputSchema), z.lazy(() => InboxLabelWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => InboxLabelWhereUniqueInputSchema), z.lazy(() => InboxLabelWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema),
                z.lazy(() => InboxLabelUpdateWithWhereUniqueWithoutInboxInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InboxLabelUpdateManyWithWhereWithoutInboxInputSchema),
                z.lazy(() => InboxLabelUpdateManyWithWhereWithoutInboxInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => InboxLabelScalarWhereInputSchema), z.lazy(() => InboxLabelScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default InboxLabelUpdateManyWithoutInboxNestedInputSchema
