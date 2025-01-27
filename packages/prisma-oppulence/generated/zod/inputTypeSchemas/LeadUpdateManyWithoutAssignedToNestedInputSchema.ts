import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutAssignedToInputSchema } from './LeadCreateWithoutAssignedToInputSchema'
import { LeadUncheckedCreateWithoutAssignedToInputSchema } from './LeadUncheckedCreateWithoutAssignedToInputSchema'
import { LeadCreateOrConnectWithoutAssignedToInputSchema } from './LeadCreateOrConnectWithoutAssignedToInputSchema'
import { LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema } from './LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema'
import { LeadCreateManyAssignedToInputEnvelopeSchema } from './LeadCreateManyAssignedToInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema } from './LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema'
import { LeadUpdateManyWithWhereWithoutAssignedToInputSchema } from './LeadUpdateManyWithWhereWithoutAssignedToInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUpdateManyWithoutAssignedToNestedInputSchema: z.ZodType<Prisma.LeadUpdateManyWithoutAssignedToNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadCreateWithoutAssignedToInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutAssignedToInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCreateManyAssignedToInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutAssignedToInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutAssignedToInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUpdateManyWithoutAssignedToNestedInputSchema
