import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramResourceCreateManyProgramInputSchema } from './ProgramResourceCreateManyProgramInputSchema'

export const ProgramResourceCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.ProgramResourceCreateManyProgramInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProgramResourceCreateManyProgramInputSchema),
            z.lazy(() => ProgramResourceCreateManyProgramInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramResourceCreateManyProgramInputEnvelopeSchema
