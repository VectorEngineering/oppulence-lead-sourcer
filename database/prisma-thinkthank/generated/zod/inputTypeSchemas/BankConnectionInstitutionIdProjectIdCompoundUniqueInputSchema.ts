import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const BankConnectionInstitutionIdProjectIdCompoundUniqueInputSchema: z.ZodType<Prisma.BankConnectionInstitutionIdProjectIdCompoundUniqueInput> =
    z
        .object({
            institutionId: z.string(),
            projectId: z.string()
        })
        .strict()

export default BankConnectionInstitutionIdProjectIdCompoundUniqueInputSchema
