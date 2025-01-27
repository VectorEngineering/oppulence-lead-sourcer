import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateManyPartnerInputSchema } from './SaleCreateManyPartnerInputSchema';

export const SaleCreateManyPartnerInputEnvelopeSchema: z.ZodType<Prisma.SaleCreateManyPartnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SaleCreateManyPartnerInputSchema),z.lazy(() => SaleCreateManyPartnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SaleCreateManyPartnerInputEnvelopeSchema;
