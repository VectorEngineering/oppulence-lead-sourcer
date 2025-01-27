import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentCreateManyPartnerInputSchema } from './ProgramEnrollmentCreateManyPartnerInputSchema'

export const ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.ProgramEnrollmentCreateManyPartnerInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProgramEnrollmentCreateManyPartnerInputSchema),
            z.lazy(() => ProgramEnrollmentCreateManyPartnerInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramEnrollmentCreateManyPartnerInputEnvelopeSchema
