import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerCreateWithoutApplicationsInputSchema } from './PartnerCreateWithoutApplicationsInputSchema'
import { PartnerUncheckedCreateWithoutApplicationsInputSchema } from './PartnerUncheckedCreateWithoutApplicationsInputSchema'
import { PartnerCreateOrConnectWithoutApplicationsInputSchema } from './PartnerCreateOrConnectWithoutApplicationsInputSchema'
import { PartnerUpsertWithoutApplicationsInputSchema } from './PartnerUpsertWithoutApplicationsInputSchema'
import { PartnerWhereInputSchema } from './PartnerWhereInputSchema'
import { PartnerWhereUniqueInputSchema } from './PartnerWhereUniqueInputSchema'
import { PartnerUpdateToOneWithWhereWithoutApplicationsInputSchema } from './PartnerUpdateToOneWithWhereWithoutApplicationsInputSchema'
import { PartnerUpdateWithoutApplicationsInputSchema } from './PartnerUpdateWithoutApplicationsInputSchema'
import { PartnerUncheckedUpdateWithoutApplicationsInputSchema } from './PartnerUncheckedUpdateWithoutApplicationsInputSchema'

export const PartnerUpdateOneWithoutApplicationsNestedInputSchema: z.ZodType<Prisma.PartnerUpdateOneWithoutApplicationsNestedInput> = z
    .object({
        create: z
            .union([
                z.lazy(() => PartnerCreateWithoutApplicationsInputSchema),
                z.lazy(() => PartnerUncheckedCreateWithoutApplicationsInputSchema)
            ])
            .optional(),
        connectOrCreate: z.lazy(() => PartnerCreateOrConnectWithoutApplicationsInputSchema).optional(),
        upsert: z.lazy(() => PartnerUpsertWithoutApplicationsInputSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => PartnerWhereInputSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => PartnerWhereInputSchema)]).optional(),
        connect: z.lazy(() => PartnerWhereUniqueInputSchema).optional(),
        update: z
            .union([
                z.lazy(() => PartnerUpdateToOneWithWhereWithoutApplicationsInputSchema),
                z.lazy(() => PartnerUpdateWithoutApplicationsInputSchema),
                z.lazy(() => PartnerUncheckedUpdateWithoutApplicationsInputSchema)
            ])
            .optional()
    })
    .strict()

export default PartnerUpdateOneWithoutApplicationsNestedInputSchema
