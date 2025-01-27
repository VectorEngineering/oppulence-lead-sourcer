import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealTaskCreateWithoutDealInputSchema } from './DealTaskCreateWithoutDealInputSchema'
import { DealTaskUncheckedCreateWithoutDealInputSchema } from './DealTaskUncheckedCreateWithoutDealInputSchema'
import { DealTaskCreateOrConnectWithoutDealInputSchema } from './DealTaskCreateOrConnectWithoutDealInputSchema'
import { DealTaskCreateManyDealInputEnvelopeSchema } from './DealTaskCreateManyDealInputEnvelopeSchema'
import { DealTaskWhereUniqueInputSchema } from './DealTaskWhereUniqueInputSchema'

export const DealTaskCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DealTaskCreateNestedManyWithoutDealInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => DealTaskCreateWithoutDealInputSchema),
                z.lazy(() => DealTaskCreateWithoutDealInputSchema).array(),
                z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema),
                z.lazy(() => DealTaskUncheckedCreateWithoutDealInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => DealTaskCreateOrConnectWithoutDealInputSchema),
                z.lazy(() => DealTaskCreateOrConnectWithoutDealInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => DealTaskCreateManyDealInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => DealTaskWhereUniqueInputSchema), z.lazy(() => DealTaskWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default DealTaskCreateNestedManyWithoutDealInputSchema
