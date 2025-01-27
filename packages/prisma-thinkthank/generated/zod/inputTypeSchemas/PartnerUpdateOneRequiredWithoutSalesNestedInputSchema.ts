import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutSalesInputSchema } from './PartnerCreateWithoutSalesInputSchema'
import { PartnerUncheckedCreateWithoutSalesInputSchema } from './PartnerUncheckedCreateWithoutSalesInputSchema'
import { PartnerCreateOrConnectWithoutSalesInputSchema } from './PartnerCreateOrConnectWithoutSalesInputSchema'
import { PartnerUpsertWithoutSalesInputSchema } from './PartnerUpsertWithoutSalesInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerUpdateToOneWithWhereWithoutSalesInputSchema } from './PartnerUpdateToOneWithWhereWithoutSalesInputSchema'
import { PartnerUpdateWithoutSalesInputSchema } from './PartnerUpdateWithoutSalesInputSchema'
import { PartnerUncheckedUpdateWithoutSalesInputSchema } from './PartnerUncheckedUpdateWithoutSalesInputSchema'

export const PartnerUpdateOneRequiredWithoutSalesNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneRequiredWithoutSalesNestedInput> = z
    .object({
        create: z
            .union([z.lazy(() => PartnerCreateWithoutSalesInputSchema), z.lazy(() => PartnerUncheckedCreateWithoutSalesInputSchema)])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutSalesInputSchema).optional(),
        upsert: z.lazy(() => PartnerUpsertWithoutSalesInputSchema).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => PartnerUpdateToOneWithWhereWithoutSalesInputSchema),
                z.lazy(() => PartnerUpdateWithoutSalesInputSchema),
                z.lazy(() => PartnerUncheckedUpdateWithoutSalesInputSchema)
            ])
            .optional()
    })
    .strict()

export default PartnerUpdateOneRequiredWithoutSalesNestedInputSchema
