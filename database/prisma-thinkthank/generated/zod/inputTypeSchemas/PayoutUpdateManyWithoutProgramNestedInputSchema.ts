import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PayoutCreateWithoutProgramInputSchema } from './PayoutCreateWithoutProgramInputSchema'
import { PayoutUncheckedCreateWithoutProgramInputSchema } from './PayoutUncheckedCreateWithoutProgramInputSchema'
import { PayoutCreateOrConnectWithoutProgramInputSchema } from './PayoutCreateOrConnectWithoutProgramInputSchema'
import { PayoutUpsertWithWhereUniqueWithoutProgramInputSchema } from './PayoutUpsertWithWhereUniqueWithoutProgramInputSchema'
import { PayoutCreateManyProgramInputEnvelopeSchema } from './PayoutCreateManyProgramInputEnvelopeSchema'
import { PayoutWhereUniqueInputSchema } from './PayoutWhereUniqueInputSchema'
import { PayoutUpdateWithWhereUniqueWithoutProgramInputSchema } from './PayoutUpdateWithWhereUniqueWithoutProgramInputSchema'
import { PayoutUpdateManyWithWhereWithoutProgramInputSchema } from './PayoutUpdateManyWithWhereWithoutProgramInputSchema'
import { PayoutScalarWhereInputSchema } from './PayoutScalarWhereInputSchema'

export const PayoutUpdateManyWithoutProgramNestedInputSchema: z.ZodType<Prisma.PayoutUpdateManyWithoutProgramNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PayoutCreateWithoutProgramInputSchema),
                z.lazy(() => PayoutCreateWithoutProgramInputSchema).array(),
                z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema),
                z.lazy(() => PayoutUncheckedCreateWithoutProgramInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => PayoutCreateOrConnectWithoutProgramInputSchema),
                z.lazy(() => PayoutCreateOrConnectWithoutProgramInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => PayoutUpsertWithWhereUniqueWithoutProgramInputSchema),
                z.lazy(() => PayoutUpsertWithWhereUniqueWithoutProgramInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => PayoutCreateManyProgramInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => PayoutWhereUniqueInputSchema), z.lazy(() => PayoutWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => PayoutUpdateWithWhereUniqueWithoutProgramInputSchema),
                z.lazy(() => PayoutUpdateWithWhereUniqueWithoutProgramInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => PayoutUpdateManyWithWhereWithoutProgramInputSchema),
                z.lazy(() => PayoutUpdateManyWithWhereWithoutProgramInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => PayoutScalarWhereInputSchema), z.lazy(() => PayoutScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default PayoutUpdateManyWithoutProgramNestedInputSchema
