import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AppCreateManyProjectInputSchema } from './AppCreateManyProjectInputSchema';

export const AppCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.AppCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AppCreateManyProjectInputSchema),z.lazy(() => AppCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AppCreateManyProjectInputEnvelopeSchema;
