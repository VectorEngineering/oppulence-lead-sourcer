import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentCreateManyDocumentInputSchema } from './DocumentCommentCreateManyDocumentInputSchema';

export const DocumentCommentCreateManyDocumentInputEnvelopeSchema: z.ZodType<Prisma.DocumentCommentCreateManyDocumentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DocumentCommentCreateManyDocumentInputSchema),z.lazy(() => DocumentCommentCreateManyDocumentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DocumentCommentCreateManyDocumentInputEnvelopeSchema;
