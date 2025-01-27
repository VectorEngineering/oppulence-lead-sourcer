import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealCreateWithoutAssignedToInputSchema } from './DealCreateWithoutAssignedToInputSchema'
import { DealUncheckedCreateWithoutAssignedToInputSchema } from './DealUncheckedCreateWithoutAssignedToInputSchema'
import { DealCreateOrConnectWithoutAssignedToInputSchema } from './DealCreateOrConnectWithoutAssignedToInputSchema'
import { DealCreateManyAssignedToInputEnvelopeSchema } from './DealCreateManyAssignedToInputEnvelopeSchema'
import { DealWhereUniqueInputSchema } from './DealWhereUniqueInputSchema'

export const DealUncheckedCreateNestedManyWithoutAssignedToInputSchema: z.ZodType<Prisma.DealUncheckedCreateNestedManyWithoutAssignedToInput> =
    z
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
            createMany: z.lazy(() => DealCreateManyAssignedToInputEnvelopeSchema).optional(),
            connect: z.union([z.lazy(() => DealWhereUniqueInputSchema), z.lazy(() => DealWhereUniqueInputSchema).array()]).optional()
        })
        .strict()

export default DealUncheckedCreateNestedManyWithoutAssignedToInputSchema
