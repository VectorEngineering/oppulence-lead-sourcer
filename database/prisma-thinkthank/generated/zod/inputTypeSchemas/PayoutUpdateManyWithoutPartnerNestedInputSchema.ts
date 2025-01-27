import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateWithoutPartnerInputSchema } from './PayoutCreateWithoutPartnerInputSchema'
import { PayoutUncheckedCreateWithoutPartnerInputSchema } from './PayoutUncheckedCreateWithoutPartnerInputSchema'
import { PayoutCreateOrConnectWithoutPartnerInputSchema } from './PayoutCreateOrConnectWithoutPartnerInputSchema'
import { PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema } from './PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema'
import { PayoutCreateManyPartnerInputEnvelopeSchema } from './PayoutCreateManyPartnerInputEnvelopeSchema'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema } from './PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema'
import { PayoutUpdateManyWithWhereWithoutPartnerInputSchema } from './PayoutUpdateManyWithWhereWithoutPartnerInputSchema'
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema'

export const PayoutUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithoutPartnerNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PayoutCreateWithoutPartnerInputSchema),
                z.lazy(() => PayoutCreateWithoutPartnerInputSchema).array(),
                z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema),
                z.lazy(() => PayoutUncheckedCreateWithoutPartnerInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PayoutCreateOrConnectWithoutPartnerInputSchema),
                z.lazy(() => PayoutCreateOrConnectWithoutPartnerInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => PayoutUpsertWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => PayoutCreateManyPartnerInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => PayoutUpdateWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => PayoutUpdateManyWithWhereWithoutPartnerInputSchema),
                z.lazy(() => PayoutUpdateManyWithWhereWithoutPartnerInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => PayoutScalarWhereInputSchema), z.lazy(() => PayoutScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default PayoutUpdateManyWithoutPartnerNestedInputSchema
