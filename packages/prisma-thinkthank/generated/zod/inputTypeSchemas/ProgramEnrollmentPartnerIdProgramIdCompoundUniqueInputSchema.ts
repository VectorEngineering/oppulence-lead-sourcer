import type { Prisma } from '@prisma/client'

import { z } from 'zod'

export const ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInput> =
    z
        .object({
            partnerId: z.string(),
            programId: z.string()
        })
        .strict()

export default ProgramEnrollmentPartnerIdProgramIdCompoundUniqueInputSchema
