import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationCreateManyDocumentInputSchema } from './DocumentAnnotationCreateManyDocumentInputSchema';

export const DocumentAnnotationCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.DocumentAnnotationCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentAnnotationCreateManyDocumentInputSchema),z.lazy(() => DocumentAnnotationCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DocumentAnnotationCreateManyDocumentInputEnvelopeSchema;
