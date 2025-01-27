import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerUserCreateManyPartnerInputSchema } from './PartnerUserCreateManyPartnerInputSchema'

export const PartnerUserCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.PartnerUserCreateManyPartnerInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => PartnerUserCreateManyPartnerInputSchema),
            z.lazy(() => PartnerUserCreateManyPartnerInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PartnerUserCreateManyPartnerInputEnvelopeSchema
