import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCommentCreateWithoutDocumentInputSchema } from './DocumentCommentCreateWithoutDocumentInputSchema';
import { DocumentCommentUncheckedCreateWithoutDocumentInputSchema } from './DocumentCommentUncheckedCreateWithoutDocumentInputSchema';
import { DocumentCommentCreateOrConnectWithoutDocumentInputSchema } from './DocumentCommentCreateOrConnectWithoutDocumentInputSchema';
import { DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema } from './DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentCommentCreateManyDocumentInputEnvelopeSchema } from './DocumentCommentCreateManyDocumentInputEnvelopeSchema';
import { DocumentCommentWhereUniqueInputSchema } from './DocumentCommentWhereUniqueInputSchema';
import { DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema } from './DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema } from './DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema';
import { DocumentCommentScalarWhereInputSchema } from './DocumentCommentScalarWhereInputSchema';

export const DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema),z.lazy(() => DocumentCommentCreateWithoutDocumentInputSchema).array(),z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentCommentCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => DocumentCommentCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentCommentCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentCommentWhereUniqueInputSchema),z.lazy(() => DocumentCommentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentCommentWhereUniqueInputSchema),z.lazy(() => DocumentCommentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentCommentWhereUniqueInputSchema),z.lazy(() => DocumentCommentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentCommentWhereUniqueInputSchema),z.lazy(() => DocumentCommentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema),z.lazy(() => DocumentCommentUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentCommentScalarWhereInputSchema),z.lazy(() => DocumentCommentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DocumentCommentUncheckedUpdateManyWithoutDocumentNestedInputSchema;
