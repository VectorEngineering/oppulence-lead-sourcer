import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutAssignedToInputSchema } from './DealCreateWithoutAssignedToInputSchema'
import { DealUncheckedCreateWithoutAssignedToInputSchema } from './DealUncheckedCreateWithoutAssignedToInputSchema'
import { DealCreateOrConnectWithoutAssignedToInputSchema } from './DealCreateOrConnectWithoutAssignedToInputSchema'
import { DealUpsertWithWhereUniqueWithoutAssignedToInputSchema } from './DealUpsertWithWhereUniqueWithoutAssignedToInputSchema'
import { DealCreateManyAssignedToInputEnvelopeSchema } from './DealCreateManyAssignedToInputEnvelopeSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithWhereUniqueWithoutAssignedToInputSchema } from './DealUpdateWithWhereUniqueWithoutAssignedToInputSchema'
import { DealUpdateManyWithWhereWithoutAssignedToInputSchema } from './DealUpdateManyWithWhereWithoutAssignedToInputSchema'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'

export const DealUpdateManyWithoutAssignedToNestedInputSchema: z.ZodType<Prisma.DealUpdateManyWithoutAssignedToNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealCreateWithoutAssignedToInputSchema),
                z.lazy(() => DealCreateWithoutAssignedToInputSchema).array(),
                z.lazy(() => DealUncheckedCreateWithoutAssignedToInputSchema),
                z.lazy(() => DealUncheckedCreateWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealCreateOrConnectWithoutAssignedToInputSchema),
                z.lazy(() => DealCreateOrConnectWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DealUpsertWithWhereUniqueWithoutAssignedToInputSchema),
                z.lazy(() => DealUpsertWithWhereUniqueWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealCreateManyAssignedToInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DealUpdateWithWhereUniqueWithoutAssignedToInputSchema),
                z.lazy(() => DealUpdateWithWhereUniqueWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DealUpdateManyWithWhereWithoutAssignedToInputSchema),
                z.lazy(() => DealUpdateManyWithWhereWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default DealUpdateManyWithoutAssignedToNestedInputSchema
