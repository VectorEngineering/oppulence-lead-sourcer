import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PayoutCreateManyProgramInputSchema } from './PayoutCreateManyProgramInputSchema';

export const PayoutCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.PayoutCreateManyProgramInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PayoutCreateManyProgramInputSchema),z.lazy(() => PayoutCreateManyProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default PayoutCreateManyProgramInputEnvelopeSchema;
