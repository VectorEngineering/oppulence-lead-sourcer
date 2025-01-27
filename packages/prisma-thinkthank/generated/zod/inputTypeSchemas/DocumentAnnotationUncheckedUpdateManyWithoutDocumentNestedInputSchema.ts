import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationCreateWithoutDocumentInputSchema } from './DocumentAnnotationCreateWithoutDocumentInputSchema';
import { DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema';
import { DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema } from './DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema';
import { DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema } from './DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentAnnotationCreateManyDocumentInputEnvelopeSchema } from './DocumentAnnotationCreateManyDocumentInputEnvelopeSchema';
import { DocumentAnnotationWhereUniqueInputSchema } from './DocumentAnnotationWhereUniqueInputSchema';
import { DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema } from './DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema';
import { DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema } from './DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema';
import { DocumentAnnotationScalarWhereInputSchema } from './DocumentAnnotationScalarWhereInputSchema';

export const DocumentAnnotationUncheckedUpdateManyWithoutDocumentNestedInputSchema: z.ZodType<Prisma.DocumentAnnotationUncheckedUpdateManyWithoutDocumentNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema).array(),z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUpsertWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentAnnotationCreateManyDocumentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),z.lazy(() => DocumentAnnotationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),z.lazy(() => DocumentAnnotationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),z.lazy(() => DocumentAnnotationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),z.lazy(() => DocumentAnnotationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUpdateWithWhereUniqueWithoutDocumentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUpdateManyWithWhereWithoutDocumentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentAnnotationScalarWhereInputSchema),z.lazy(() => DocumentAnnotationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DocumentAnnotationUncheckedUpdateManyWithoutDocumentNestedInputSchema;
