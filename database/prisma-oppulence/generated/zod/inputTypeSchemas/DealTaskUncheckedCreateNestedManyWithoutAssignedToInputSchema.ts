import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateWithoutAssignedToInputSchema } from './DealTaskCreateWithoutAssignedToInputSchema'
import { DealTaskUncheckedCreateWithoutAssignedToInputSchema } from './DealTaskUncheckedCreateWithoutAssignedToInputSchema'
import { DealTaskCreateOrConnectWithoutAssignedToInputSchema } from './DealTaskCreateOrConnectWithoutAssignedToInputSchema'
import { DealTaskCreateManyAssignedToInputEnvelopeSchema } from './DealTaskCreateManyAssignedToInputEnvelopeSchema'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'

export const DealTaskUncheckedCreateNestedManyWithoutAssignedToInputSchema: z.ZodType<Prisma.DealTaskUncheckedCreateNestedManyWithoutAssignedToInput> =
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
            createMany: z.lazy(() => DealTaskCreateManyAssignedToInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default DealTaskUncheckedCreateNestedManyWithoutAssignedToInputSchema
