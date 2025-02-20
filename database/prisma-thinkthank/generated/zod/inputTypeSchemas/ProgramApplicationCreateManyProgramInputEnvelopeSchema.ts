import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramApplicationCreateManyProgramInputSchema } from './ProgramApplicationCreateManyProgramInputSchema'

export const ProgramApplicationCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.ProgramApplicationCreateManyProgramInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProgramApplicationCreateManyProgramInputSchema),
            z.lazy(() => ProgramApplicationCreateManyProgramInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramApplicationCreateManyProgramInputEnvelopeSchema
