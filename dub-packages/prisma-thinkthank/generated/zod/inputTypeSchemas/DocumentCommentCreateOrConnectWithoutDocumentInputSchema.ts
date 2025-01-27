import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentWhereUniqueInputSchema } from './DocumentCommentWhereUniqueInputSchema';
import { DocumentCommentCreateWithoutDocumentInputSchema } from './DocumentCommentCreateWithoutDocumentInputSchema';
import { DocumentCommentUncheckedCreateWithoutDocumentInputSchema } from './DocumentCommentUncheckedCreateWithoutDocumentInputSchema';

export const DocumentCommentCreateOrConnectWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentCreateOrConnectWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentCommentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentCommentCreateOrConnectWithoutDocumentInputSchema;
