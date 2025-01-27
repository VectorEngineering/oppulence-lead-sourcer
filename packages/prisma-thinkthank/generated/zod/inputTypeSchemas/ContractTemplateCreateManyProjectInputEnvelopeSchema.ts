import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContractTemplateCreateManyProjectInputSchema } from './ContractTemplateCreateManyProjectInputSchema';

export const ContractTemplateCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ContractTemplateCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ContractTemplateCreateManyProjectInputSchema),z.lazy(() => ContractTemplateCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default ContractTemplateCreateManyProjectInputEnvelopeSchema;
