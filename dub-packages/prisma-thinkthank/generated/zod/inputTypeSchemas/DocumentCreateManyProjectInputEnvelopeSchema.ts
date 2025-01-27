import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateManyProjectInputSchema } from './DocumentCreateManyProjectInputSchema';

export const DocumentCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.DocumentCreateManyProjectInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentCreateManyProjectInputSchema),z.lazy(() => DocumentCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DocumentCreateManyProjectInputEnvelopeSchema;
