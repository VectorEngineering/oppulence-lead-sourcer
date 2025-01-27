import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramEnrollmentCreateManyProgramInputSchema } from './ProgramEnrollmentCreateManyProgramInputSchema'

export const ProgramEnrollmentCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.ProgramEnrollmentCreateManyProgramInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProgramEnrollmentCreateManyProgramInputSchema),
            z.lazy(() => ProgramEnrollmentCreateManyProgramInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramEnrollmentCreateManyProgramInputEnvelopeSchema
