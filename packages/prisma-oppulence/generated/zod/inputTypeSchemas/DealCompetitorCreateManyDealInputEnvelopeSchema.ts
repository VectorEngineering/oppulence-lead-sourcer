import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCompetitorCreateManyDealInputSchema } from './DealCompetitorCreateManyDealInputSchema';

export const DealCompetitorCreateManyDealInputEnvelopeSchema: z.ZodType<Prisma.DealCompetitorCreateManyDealInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DealCompetitorCreateManyDealInputSchema),z.lazy(() => DealCompetitorCreateManyDealInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DealCompetitorCreateManyDealInputEnvelopeSchema;
