import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractCreateManyCustomerInputSchema } from './ContractCreateManyCustomerInputSchema';

export const ContractCreateManyCustomerInputEnvelopeSchema: z.ZodType<Prisma.ContractCreateManyCustomerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ContractCreateManyCustomerInputSchema),z.lazy(() => ContractCreateManyCustomerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ContractCreateManyCustomerInputEnvelopeSchema;
