import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { SaleCreateWithoutPartnerInputSchema } from './SaleCreateWithoutPartnerInputSchema'
import { SaleUncheckedCreateWithoutPartnerInputSchema } from './SaleUncheckedCreateWithoutPartnerInputSchema'
import { SaleCreateOrConnectWithoutPartnerInputSchema } from './SaleCreateOrConnectWithoutPartnerInputSchema'
import { SaleUpsertWithWhereUniqueWithoutPartnerInputSchema } from './SaleUpsertWithWhereUniqueWithoutPartnerInputSchema'
import { SaleCreateManyPartnerInputEnvelopeSchema } from './SaleCreateManyPartnerInputEnvelopeSchema'
import { SaleWhereUniqueInputSchema } from './SaleWhereUniqueInputSchema'
import { SaleUpdateWithWhereUniqueWithoutPartnerInputSchema } from './SaleUpdateWithWhereUniqueWithoutPartnerInputSchema'
import { SaleUpdateManyWithWhereWithoutPartnerInputSchema } from './SaleUpdateManyWithWhereWithoutPartnerInputSchema'
import { SaleScalarWhereInputSchema } from './SaleScalarWhereInputSchema'

export const SaleUpdateManyWithoutPartnerNestedInputSchema: z.ZodType<Prisma.SaleUpdateManyWithoutPartnerNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => SaleCreateWithoutPartnerInputSchema),
                z.lazy(() => SaleCreateWithoutPartnerInputSchema).array(),
                z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema),
                z.lazy(() => SaleUncheckedCreateWithoutPartnerInputSchema).array()
            ])
            .optional(),
        connectOrCreate: z
            .union([
                z.lazy(() => SaleCreateOrConnectWithoutPartnerInputSchema),
                z.lazy(() => SaleCreateOrConnectWithoutPartnerInputSchema).array()
            ])
            .optional(),
        upsert: z
            .union([
                z.lazy(() => SaleUpsertWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => SaleUpsertWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        createMany: z.lazy(() => SaleCreateManyPartnerInputEnvelopeSchema).optional(),
        set: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
        disconnect: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
        delete: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
        connect: z.union([z.lazy(() => SaleWhereUniqueInputSchema), z.lazy(() => SaleWhereUniqueInputSchema).array()]).optional(),
        update: z
            .union([
                z.lazy(() => SaleUpdateWithWhereUniqueWithoutPartnerInputSchema),
                z.lazy(() => SaleUpdateWithWhereUniqueWithoutPartnerInputSchema).array()
            ])
            .optional(),
        updateMany: z
            .union([
                z.lazy(() => SaleUpdateManyWithWhereWithoutPartnerInputSchema),
                z.lazy(() => SaleUpdateManyWithWhereWithoutPartnerInputSchema).array()
            ])
            .optional(),
        deleteMany: z.union([z.lazy(() => SaleScalarWhereInputSchema), z.lazy(() => SaleScalarWhereInputSchema).array()]).optional()
    })
    .strict()

export default SaleUpdateManyWithoutPartnerNestedInputSchema
