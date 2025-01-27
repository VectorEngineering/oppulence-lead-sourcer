import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleCreateWithoutCustomerInputSchema } from './SaleCreateWithoutCustomerInputSchema'
import { SaleUncheckedCreateWithoutCustomerInputSchema } from './SaleUncheckedCreateWithoutCustomerInputSchema'
import { SaleCreateOrConnectWithoutCustomerInputSchema } from './SaleCreateOrConnectWithoutCustomerInputSchema'
import { SaleUpsertWithWhereUniqueWithoutCustomerInputSchema } from './SaleUpsertWithWhereUniqueWithoutCustomerInputSchema'
import { SaleCreateManyCustomerInputEnvelopeSchema } from './SaleCreateManyCustomerInputEnvelopeSchema'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleUpdateWithWhereUniqueWithoutCustomerInputSchema } from './SaleUpdateWithWhereUniqueWithoutCustomerInputSchema'
import { SaleUpdateManyWithWhereWithoutCustomerInputSchema } from './SaleUpdateManyWithWhereWithoutCustomerInputSchema'
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema'

export const SaleUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutCustomerNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => SaleCreateWithoutCustomerInputSchema),
                    z.lazy(() => SaleCreateWithoutCustomerInputSchema).array(),
                    z.lazy(() => SaleUncheckedCreateWithoutCustomerInputSchema),
                    z.lazy(() => SaleUncheckedCreateWithoutCustomerInputSchema).array()
                ])
                .optional(),
            connectOrCreate: z
                .union([
                    z.lazy(() => SaleCreateOrConnectWithoutCustomerInputSchema),
                    z.lazy(() => SaleCreateOrConnectWithoutCustomerInputSchema).array()
                ])
                .optional(),
            upsert: z
                .union([
                    z.lazy(() => SaleUpsertWithWhereUniqueWithoutCustomerInputSchema),
                    z.lazy(() => SaleUpsertWithWhereUniqueWithoutCustomerInputSchema).array()
                ])
                .optional(),
            createMany: z.lazy(() => SaleCreateManyCustomerInputEnvelopeSchema).optional(),
            set: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
            disconnect: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
            delete: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
            connect: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
            update: z
                .union([
                    z.lazy(() => SaleUpdateWithWhereUniqueWithoutCustomerInputSchema),
                    z.lazy(() => SaleUpdateWithWhereUniqueWithoutCustomerInputSchema).array()
                ])
                .optional(),
            updateMany: z
                .union([
                    z.lazy(() => SaleUpdateManyWithWhereWithoutCustomerInputSchema),
                    z.lazy(() => SaleUpdateManyWithWhereWithoutCustomerInputSchema).array()
                ])
                .optional(),
            deleteMany: z.union([z.lazy(() => SaleScalarWhereInputSchema), z.lazy(() => SaleScalarWhereInputSchema).array()]).optional()
        })
        .strict()

export default SaleUncheckedUpdateManyWithoutCustomerNestedInputSchema
