import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentWhereInputSchema } from './DocumentCommentWhereInputSchema';

export const DocumentCommentListRelationFilterSchema: z.ZodType<Prisma.DocumentCommentListRelationFilter> = z.object({
  every: z.lazy(() => DocumentCommentWhereInputSchema).optional(),
  some: z.lazy(() => DocumentCommentWhereInputSchema).optional(),
  none: z.lazy(() => DocumentCommentWhereInputSchema).optional()
}).strict();

export default DocumentCommentListRelationFilterSchema;
