import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateManyProgramInputSchema } from './InvoiceCreateManyProgramInputSchema';

export const InvoiceCreateManyProgramInputEnvelopeSchema: z.ZodType<Prisma.InvoiceCreateManyProgramInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InvoiceCreateManyProgramInputSchema),z.lazy(() => InvoiceCreateManyProgramInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default InvoiceCreateManyProgramInputEnvelopeSchema;
