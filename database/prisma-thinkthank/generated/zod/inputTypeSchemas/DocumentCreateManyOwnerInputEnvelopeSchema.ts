import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateManyOwnerInputSchema } from './DocumentCreateManyOwnerInputSchema';

export const DocumentCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.DocumentCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentCreateManyOwnerInputSchema),z.lazy(() => DocumentCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DocumentCreateManyOwnerInputEnvelopeSchema;
