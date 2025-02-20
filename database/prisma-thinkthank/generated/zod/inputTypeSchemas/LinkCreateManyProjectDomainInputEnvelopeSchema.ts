import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { LinkCreateManyProjectDomainInputSchema } from './LinkCreateManyProjectDomainInputSchema'

export const LinkCreateManyProjectDomainInputEnvelopeSchema: z.ZodType<Prisma.LinkCreateManyProjectDomainInputEnvelope> = z
    .object({
        data: z.union([z.lazy(() => LinkCreateManyProjectDomainInputSchema), z.lazy(() => LinkCreateManyProjectDomainInputSchema).array()]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default LinkCreateManyProjectDomainInputEnvelopeSchema
