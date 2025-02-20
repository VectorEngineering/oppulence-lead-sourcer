import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const BankAccountProjectIdAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.BankAccountProjectIdAccountIdCompoundUniqueInput> = z
    .object({
        projectId: z.string(),
        accountId: z.string()
    })
    .strict()

export default BankAccountProjectIdAccountIdCompoundUniqueInputSchema
