import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateManyProgramInputSchema } from './SaleCreateManyProgramInputSchema';

export const SaleCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.SaleCreateManyProgramInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SaleCreateManyProgramInputSchema),z.lazy(() => SaleCreateManyProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SaleCreateManyProgramInputEnvelopeSchema;
