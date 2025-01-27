import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { DiscountCreateWithoutProgramEnrollmentsInputSchema } from './DiscountCreateWithoutProgramEnrollmentsInputSchema'
import { DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema'
import { DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema } from './DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema'
import { DiscountUpsertWithoutProgramEnrollmentsInputSchema } from './DiscountUpsertWithoutProgramEnrollmentsInputSchema'
import { DiscountWhereInputSchema } from './DiscountWhereInputSchema'
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema'
import { DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInputSchema } from './DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInputSchema'
import { DiscountUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUpdateWithoutProgramEnrollmentsInputSchema'
import { DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema } from './DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema'

export const DiscountUpdateOneWithoutProgramEnrollmentsNestedInputSchema: z.ZodType<Prisma.DiscountUpdateOneWithoutProgramEnrollmentsNestedInput> =
    z
        .object({
            create: z
                .union([
                    z.lazy(() => DiscountCreateWithoutProgramEnrollmentsInputSchema),
                    z.lazy(() => DiscountUncheckedCreateWithoutProgramEnrollmentsInputSchema)
                ])
                .optional(),
            connectOrCreate: z.lazy(() => DiscountCreateOrConnectWithoutProgramEnrollmentsInputSchema).optional(),
            upsert: z.lazy(() => DiscountUpsertWithoutProgramEnrollmentsInputSchema).optional(),
            disconnect: z.union([z.boolean(), z.lazy(() => DiscountWhereInputSchema)]).optional(),
            delete: z.union([z.boolean(), z.lazy(() => DiscountWhereInputSchema)]).optional(),
            connect: z.lazy(() => DiscountWhereUniqueInputSchema).optional(),
            update: z
                .union([
                    z.lazy(() => DiscountUpdateToOneWithWhereWithoutProgramEnrollmentsInputSchema),
                    z.lazy(() => DiscountUpdateWithoutProgramEnrollmentsInputSchema),
                    z.lazy(() => DiscountUncheckedUpdateWithoutProgramEnrollmentsInputSchema)
                ])
                .optional()
        })
        .strict()

export default DiscountUpdateOneWithoutProgramEnrollmentsNestedInputSchema
