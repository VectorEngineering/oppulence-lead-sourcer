import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationWhereUniqueInputSchema } from './DocumentAnnotationWhereUniqueInputSchema';
import { DocumentAnnotationCreateWithoutDocumentInputSchema } from './DocumentAnnotationCreateWithoutDocumentInputSchema';
import { DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema';

export const DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema;
