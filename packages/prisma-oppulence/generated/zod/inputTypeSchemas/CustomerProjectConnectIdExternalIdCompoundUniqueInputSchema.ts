import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const CustomerProjectConnectIdExternalIdCompoundUniqueInputSchema: z.ZodType<Prisma.CustomerProjectConnectIdExternalIdCompoundUniqueInput> =
    z
        .object({
            projectConnectId: z.string(),
            externalId: z.string()
        })
        .strict()

export default CustomerProjectConnectIdExternalIdCompoundUniqueInputSchema
