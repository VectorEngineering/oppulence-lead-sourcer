import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutCreateManyPartnerInputSchema } from './PayoutCreateManyPartnerInputSchema';

export const PayoutCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.PayoutCreateManyPartnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PayoutCreateManyPartnerInputSchema),z.lazy(() => PayoutCreateManyPartnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PayoutCreateManyPartnerInputEnvelopeSchema;
