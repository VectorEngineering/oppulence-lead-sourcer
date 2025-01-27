import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DealCreateManyStageInputSchema } from './DealCreateManyStageInputSchema';

export const DealCreateManyStageInputEnvelopeSchema: z.ZodType<Prisma.DealCreateManyStageInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DealCreateManyStageInputSchema),z.lazy(() => DealCreateManyStageInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DealCreateManyStageInputEnvelopeSchema;
