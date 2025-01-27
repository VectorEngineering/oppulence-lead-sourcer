import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleCreateWithoutPayoutInputSchema } from './SaleCreateWithoutPayoutInputSchema'
import { SaleUncheckedCreateWithoutPayoutInputSchema } from './SaleUncheckedCreateWithoutPayoutInputSchema'
import { SaleCreateOrConnectWithoutPayoutInputSchema } from './SaleCreateOrConnectWithoutPayoutInputSchema'
import { SaleCreateManyPayoutInputEnvelopeSchema } from './SaleCreateManyPayoutInputEnvelopeSchema'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'

export const SaleUncheckedCreateNestedManyWithoutPayoutInputSchema: z.ZodType<Prisma.SaleUncheckedCreateNestedManyWithoutPayoutInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => SaleCreateWithoutPayoutInputSchema),
                z.lazy(() => SaleCreateWithoutPayoutInputSchema).array(),
                z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema),
                z.lazy(() => SaleUncheckedCreateWithoutPayoutInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SaleCreateOrConnectWithoutPayoutInputSchema),
                z.lazy(() => SaleCreateOrConnectWithoutPayoutInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => SaleCreateManyPayoutInputEnvelopeSchema).optional(),
        connect: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional()
    })
    .strict()

export default SaleUncheckedCreateNestedManyWithoutPayoutInputSchema
