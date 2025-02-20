import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { InboxActivityCreateWithoutInboxInputSchema } from './InboxActivityCreateWithoutInboxInputSchema'
import { InboxActivityUncheckedCreateWithoutInboxInputSchema } from './InboxActivityUncheckedCreateWithoutInboxInputSchema'
import { InboxActivityCreateOrConnectWithoutInboxInputSchema } from './InboxActivityCreateOrConnectWithoutInboxInputSchema'
import { InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema } from './InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema'
import { InboxActivityCreateManyInboxInputEnvelopeSchema } from './InboxActivityCreateManyInboxInputEnvelopeSchema'
import { InboxActivityWhereUniqueInputSchema } from './InboxActivityWhereUniqueInputSchema'
import { InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema } from './InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema'
import { InboxActivityUpdateManyWithWhereWithoutInboxInputSchema } from './InboxActivityUpdateManyWithWhereWithoutInboxInputSchema'
import { InboxActivityScalarWhereInputSchema } from './InboxActivityScalarWhereInputSchema'

export const InboxActivityUpdateManyWithoutInboxNestedInputSchema: z.ZodType<Prisma.InboxActivityUpdateManyWithoutInboxNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => InboxActivityCreateWithoutInboxInputSchema),
                z.lazy(() => InboxActivityCreateWithoutInboxInputSchema).array(),
                z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUncheckedCreateWithoutInboxInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => InboxActivityCreateOrConnectWithoutInboxInputSchema),
                z.lazy(() => InboxActivityCreateOrConnectWithoutInboxInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUpsertWithWhereUniqueWithoutInboxInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => InboxActivityCreateManyInboxInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => InboxActivityWhereUniqueInputSchema), z.lazy(() => InboxActivityWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => InboxActivityWhereUniqueInputSchema), z.lazy(() => InboxActivityWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => InboxActivityWhereUniqueInputSchema), z.lazy(() => InboxActivityWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => InboxActivityWhereUniqueInputSchema), z.lazy(() => InboxActivityWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUpdateWithWhereUniqueWithoutInboxInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => InboxActivityUpdateManyWithWhereWithoutInboxInputSchema),
                z.lazy(() => InboxActivityUpdateManyWithWhereWithoutInboxInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => InboxActivityScalarWhereInputSchema), z.lazy(() => InboxActivityScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default InboxActivityUpdateManyWithoutInboxNestedInputSchema
