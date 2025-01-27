import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutLeadInputSchema } from './DealCreateWithoutLeadInputSchema'
import { DealUncheckedCreateWithoutLeadInputSchema } from './DealUncheckedCreateWithoutLeadInputSchema'
import { DealCreateOrConnectWithoutLeadInputSchema } from './DealCreateOrConnectWithoutLeadInputSchema'
import { DealUpsertWithWhereUniqueWithoutLeadInputSchema } from './DealUpsertWithWhereUniqueWithoutLeadInputSchema'
import { DealCreateManyLeadInputEnvelopeSchema } from './DealCreateManyLeadInputEnvelopeSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'
import { DealUpdateWithWhereUniqueWithoutLeadInputSchema } from './DealUpdateWithWhereUniqueWithoutLeadInputSchema'
import { DealUpdateManyWithWhereWithoutLeadInputSchema } from './DealUpdateManyWithWhereWithoutLeadInputSchema'
import { DealScalarWhereInputSchema } from './DealScalarWhereInputSchema'

export const DealUncheckedUpdateManyWithoutLeadNestedInputSchema: z.ZodType<Prisma.DealUncheckedUpdateManyWithoutLeadNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealCreateWithoutLeadInputSchema),
                z.lazy(() => DealCreateWithoutLeadInputSchema).array(),
                z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema),
                z.lazy(() => DealUncheckedCreateWithoutLeadInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealCreateOrConnectWithoutLeadInputSchema),
                z.lazy(() => DealCreateOrConnectWithoutLeadInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => DealUpsertWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => DealUpsertWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealCreateManyLeadInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => DealUpdateWithWhereUniqueWithoutLeadInputSchema),
                z.lazy(() => DealUpdateWithWhereUniqueWithoutLeadInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => DealUpdateManyWithWhereWithoutLeadInputSchema),
                z.lazy(() => DealUpdateManyWithWhereWithoutLeadInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => DealScalarWhereInputSchema), z.lazy(() => DealScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default DealUncheckedUpdateManyWithoutLeadNestedInputSchema
