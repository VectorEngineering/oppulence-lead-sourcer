import type { Prisma } from '@prisma/client'

import { z } from 'zod'
import { PartnerInviteCreateManyPartnerInputSchema } from './PartnerInviteCreateManyPartnerInputSchema'

export const PartnerInviteCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.PartnerInviteCreateManyPartnerInputEnvelope> = z
    .object({
        data: z.union([
            z.lazy(() => PartnerInviteCreateManyPartnerInputSchema),
            z.lazy(() => PartnerInviteCreateManyPartnerInputSchema).array()
        ]),
        skipDuplicates: z.boolean().optional()
    })
    .strict()

export default PartnerInviteCreateManyPartnerInputEnvelopeSchema
