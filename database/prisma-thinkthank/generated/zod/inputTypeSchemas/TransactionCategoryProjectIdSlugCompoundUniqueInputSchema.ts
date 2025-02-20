import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const TransactionCategoryProjectIdSlugCompoundUniqueInputSchema: z.ZodType<Prisma.TransactionCategoryProjectIdSlugCompoundUniqueInput> =
    z
        .object({
            projectId: z.string(),
            slug: z.string()
        })
        .strict()

export default TransactionCategoryProjectIdSlugCompoundUniqueInputSchema
