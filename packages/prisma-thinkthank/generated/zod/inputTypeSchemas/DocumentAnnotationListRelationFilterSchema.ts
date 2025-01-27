import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationWhereInputSchema } from './DocumentAnnotationWhereInputSchema';

export const DocumentAnnotationListRelationFilterSchema: z.ZodType<Prisma.DocumentAnnotationListRelationFilter> = z.object({
  every: z.lazy(() => DocumentAnnotationWhereInputSchema).optional(),
  some: z.lazy(() => DocumentAnnotationWhereInputSchema).optional(),
  none: z.lazy(() => DocumentAnnotationWhereInputSchema).optional()
}).strict();

export default DocumentAnnotationListRelationFilterSchema;
