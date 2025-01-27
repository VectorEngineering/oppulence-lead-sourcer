import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LeadCreateWithoutProjectInputSchema } from './LeadCreateWithoutProjectInputSchema'
import { LeadUncheckedCreateWithoutProjectInputSchema } from './LeadUncheckedCreateWithoutProjectInputSchema'
import { LeadCreateOrConnectWithoutProjectInputSchema } from './LeadCreateOrConnectWithoutProjectInputSchema'
import { LeadUpsertWithWhereUniqueWithoutProjectInputSchema } from './LeadUpsertWithWhereUniqueWithoutProjectInputSchema'
import { LeadCreateManyProjectInputEnvelopeSchema } from './LeadCreateManyProjectInputEnvelopeSchema'
import { LeadWhereUniqueInputSchema } from './LeadWhereUniqueInputSchema'
import { LeadUpdateWithWhereUniqueWithoutProjectInputSchema } from './LeadUpdateWithWhereUniqueWithoutProjectInputSchema'
import { LeadUpdateManyWithWhereWithoutProjectInputSchema } from './LeadUpdateManyWithWhereWithoutProjectInputSchema'
import { LeadScalarWhereInputSchema } from './LeadScalarWhereInputSchema'

export const LeadUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.LeadUncheckedUpdateManyWithoutProjectNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => LeadCreateWithoutProjectInputSchema),
                z.lazy(() => LeadCreateWithoutProjectInputSchema).array(),
                z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema),
                z.lazy(() => LeadUncheckedCreateWithoutProjectInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => LeadCreateOrConnectWithoutProjectInputSchema),
                z.lazy(() => LeadCreateOrConnectWithoutProjectInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => LeadUpsertWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => LeadCreateManyProjectInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => LeadWhereUniqueInputSchema), z.lazy(() => LeadWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutProjectInputSchema),
                z.lazy(() => LeadUpdateWithWhereUniqueWithoutProjectInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => LeadUpdateManyWithWhereWithoutProjectInputSchema),
                z.lazy(() => LeadUpdateManyWithWhereWithoutProjectInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => LeadScalarWhereInputSchema), z.lazy(() => LeadScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default LeadUncheckedUpdateManyWithoutProjectNestedInputSchema
