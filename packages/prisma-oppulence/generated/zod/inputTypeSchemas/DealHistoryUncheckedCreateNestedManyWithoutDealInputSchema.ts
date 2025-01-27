import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DealHistoryCreateWithoutDealInputSchema } from './DealHistoryCreateWithoutDealInputSchema'
import { DealHistoryUncheckedCreateWithoutDealInputSchema } from './DealHistoryUncheckedCreateWithoutDealInputSchema'
import { DealHistoryCreateOrConnectWithoutDealInputSchema } from './DealHistoryCreateOrConnectWithoutDealInputSchema'
import { DealHistoryCreateManyDealInputEnvelopeSchema } from './DealHistoryCreateManyDealInputEnvelopeSchema'
import { DealHistoryWhereUniqueInputSchema } from './DealHistoryWhereUniqueInputSchema'

export const DealHistoryUncheckedCreateNestedManyWithoutDealInputSchema: z.ZodType<Prisma.DealHistoryUncheckedCreateNestedManyWithoutDealInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DealHistoryCreateWithoutDealInputSchema),
                    z.lazy(() => DealHistoryCreateWithoutDealInputSchema).array(),
                    z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema),
                    z.lazy(() => DealHistoryUncheckedCreateWithoutDealInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => DealHistoryCreateOrConnectWithoutDealInputSchema),
                    z.lazy(() => DealHistoryCreateOrConnectWithoutDealInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => DealHistoryCreateManyDealInputEnvelopeSchema).optional(),
            connect: z
                .union([z.lazy(() => DealHistoryWhereUniqueInputSchema), z.lazy(() => DealHistoryWhereUniqueInputSchema).array()])
                .optional()
        })
        .strict()

export default DealHistoryUncheckedCreateNestedManyWithoutDealInputSchema
