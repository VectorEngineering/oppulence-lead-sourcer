import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationWhereUniqueInputSchema } from './DocumentAnnotationWhereUniqueInputSchema';
import { DocumentAnnotationUpdateWithoutDocumentInputSchema } from './DocumentAnnotationUpdateWithoutDocumentInputSchema';
import { DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema';

export const DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DocumentAnnotationUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUncheckedUpdateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema;
