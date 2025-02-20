import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteCreateWithoutPartnerInputSchema } from './PartnerInviteCreateWithoutPartnerInputSchema'
import { PartnerInviteUncheckedCreateWithoutPartnerInputSchema } from './PartnerInviteUncheckedCreateWithoutPartnerInputSchema'
import { PartnerInviteCreateOrConnectWithoutPartnerInputSchema } from './PartnerInviteCreateOrConnectWithoutPartnerInputSchema'
import { PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema } from './PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema'
import { PartnerInviteCreateManyPartnerInputEnvelopeSchema } from './PartnerInviteCreateManyPartnerInputEnvelopeSchema'
import { PartnerInviteWhereUniqueInputSchema } from './PartnerInviteWhereUniqueInputSchema'
import { PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema } from './PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema'
import { PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema } from './PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema'
import { PartnerInviteScalarWhereInputSchema } from './PartnerInviteScalarWhereInputSchema'

export const PartnerInviteUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.PartnerInviteUpdateManyWithoutPartnerNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteCreateWithoutPartnerInputSchema).array(),
                z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteUncheckedCreateWithoutPartnerInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PartnerInviteCreateOrConnectWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteCreateOrConnectWithoutPartnerInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteUpsertWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => PartnerInviteCreateManyPartnerInputEnvelopeSchema).optional(),
        set: z
            .union([z.lazy(() => PartnerInviteWhereUniqueInputSchema), z.lazy(() => PartnerInviteWhereUniqueInputSchema).array()])
            .optional(),
        disconnect: z
            .union([z.lazy(() => PartnerInviteWhereUniqueInputSchema), z.lazy(() => PartnerInviteWhereUniqueInputSchema).array()])
            .optional(),
        delete: z
            .union([z.lazy(() => PartnerInviteWhereUniqueInputSchema), z.lazy(() => PartnerInviteWhereUniqueInputSchema).array()])
            .optional(),
        connect: z
            .union([z.lazy(() => PartnerInviteWhereUniqueInputSchema), z.lazy(() => PartnerInviteWhereUniqueInputSchema).array()])
            .optional(),
        update: z
            .union([
                z.lazy(() => PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteUpdateWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema),
                z.lazy(() => PartnerInviteUpdateManyWithWhereWithoutPartnerInputSchema).array()
            ])
            .optional(),
        deleteMany: z
            .union([z.lazy(() => PartnerInviteScalarWhereInputSchema), z.lazy(() => PartnerInviteScalarWhereInputSchema).array()])
            .optional()
    })
    .strict()

export default PartnerInviteUpdateManyWithoutPartnerNestedInputSchema
