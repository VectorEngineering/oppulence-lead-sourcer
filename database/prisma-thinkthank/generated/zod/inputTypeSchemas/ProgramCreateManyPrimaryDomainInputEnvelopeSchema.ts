import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { ProgramCreateManyPrimaryDomainInputSchema } from './ProgramCreateManyPrimaryDomainInputSchema'

export const ProgramCreateManyPrimaryDomainInputEnvelopeSchema: z.ZodType<Prisma.ProgramCreateManyPrimaryDomainInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => ProgramCreateManyPrimaryDomainInputSchema),
            z.lazy(() => ProgramCreateManyPrimaryDomainInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default ProgramCreateManyPrimaryDomainInputEnvelopeSchema
