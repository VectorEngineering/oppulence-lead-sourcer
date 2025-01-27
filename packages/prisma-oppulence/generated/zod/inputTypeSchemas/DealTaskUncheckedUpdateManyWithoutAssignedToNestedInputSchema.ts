import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateWithoutAssignedToInputSchema } from './DealTaskCreateWithoutAssignedToInputSchema'
import { DealTaskUncheckedCreateWithoutAssignedToInputSchema } from './DealTaskUncheckedCreateWithoutAssignedToInputSchema'
import { DealTaskCreateOrConnectWithoutAssignedToInputSchema } from './DealTaskCreateOrConnectWithoutAssignedToInputSchema'
import { DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema } from './DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema'
import { DealTaskCreateManyAssignedToInputEnvelopeSchema } from './DealTaskCreateManyAssignedToInputEnvelopeSchema'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'
import { DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema } from './DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema'
import { DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema } from './DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema'
import { DealTaskScalarWhereInputSchema } from './DealTaskScalarWhereInputSchema'

export const DealTaskUncheckedUpdateManyWithoutAssignedToNestedInputSchema: z.ZodType<Prisma.DealTaskUncheckedUpdateManyWithoutAssignedToNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealTaskCreateWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskCreateWithoutAssignedToInputSchema).array(),
                    z.lazy(() => DealTaskUncheckedCreateWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskUncheckedCreateWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DealTaskCreateOrConnectWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskCreateOrConnectWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskUpsertWithWhereUniqueWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DealTaskCreateManyAssignedToInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()]).optional(),
            disconnect: z
                .union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()])
                .optional(),
            delete: z
                .union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()])
                .optional(),
            connect: z
                .union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()])
                .optional(),
            update: z
                .union([
                    z.lazy(() => DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskUpdateWithWhereUniqueWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema),
                    z.lazy(() => DealTaskUpdateManyWithWhereWithoutAssignedToInputSchema).array()
                ])
                .optional(),
            deleteMany: z
                .union([z.lazy(() => DealTaskScalarWhereInputSchema), z.lazy(() => DealTaskScalarWhereInputSchema).array()])
                .optional()
        })
        .strict()

export default DealTaskUncheckedUpdateManyWithoutAssignedToNestedInputSchema
