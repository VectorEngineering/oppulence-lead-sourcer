import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const CustomerProjectIdExternalIdCompoundUniqueInputSchema: z.ZodType<Prisma.CustomerProjectIdExternalIdCompoundUniqueInput> = z
    .object({
        projectId: z.string(),
        externalId: z.string()
    })
    .strict()

export default CustomerProjectIdExternalIdCompoundUniqueInputSchema
