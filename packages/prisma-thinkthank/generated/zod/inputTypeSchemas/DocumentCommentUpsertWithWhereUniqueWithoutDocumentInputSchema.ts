import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentWhereUniqueInputSchema } from './DocumentCommentWhereUniqueInputSchema';
import { DocumentCommentUpdateWithoutDocumentInputSchema } from './DocumentCommentUpdateWithoutDocumentInputSchema';
import { DocumentCommentUncheckedUpdateWithoutDocumentInputSchema } from './DocumentCommentUncheckedUpdateWithoutDocumentInputSchema';
import { DocumentCommentCreateWithoutDocumentInputSchema } from './DocumentCommentCreateWithoutDocumentInputSchema';
import { DocumentCommentUncheckedCreateWithoutDocumentInputSchema } from './DocumentCommentUncheckedCreateWithoutDocumentInputSchema';

export const DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentCommentUpsertWithWhereUniqueWithoutDocumentInput> = z.object({
  where: z.lazy(() => DocumentCommentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DocumentCommentUpdateWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUncheckedUpdateWithoutDocumentInputSchema) ]),
  create: z.union([ z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema) ]),
}).strict();

export default DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema;
