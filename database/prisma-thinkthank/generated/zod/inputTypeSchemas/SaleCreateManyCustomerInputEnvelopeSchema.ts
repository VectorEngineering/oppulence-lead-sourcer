import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SaleCreateManyCustomerInputSchema } from './SaleCreateManyCustomerInputSchema';

export const SaleCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.SaleCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SaleCreateManyCustomerInputSchema),z.lazy(() => SaleCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default SaleCreateManyCustomerInputEnvelopeSchema;
