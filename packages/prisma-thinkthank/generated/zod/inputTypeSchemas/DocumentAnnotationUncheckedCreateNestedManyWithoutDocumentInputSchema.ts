import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentAnnotationCreateWithoutDocumentInputSchema } from './DocumentAnnotationCreateWithoutDocumentInputSchema';
import { DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema } from './DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema';
import { DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema } from './DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema';
import { DocumentAnnotationCreateManyDocumentInputEnvelopeSchema } from './DocumentAnnotationCreateManyDocumentInputEnvelopeSchema';
import { DocumentAnnotationWhereUniqueInputSchema } from './DocumentAnnotationWhereUniqueInputSchema';

export const DocumentAnnotationUncheckedCreateNestedManyWithoutDocumentInputSchema: z.ZodType<Prisma.DocumentAnnotationUncheckedCreateNestedManyWithoutDocumentInput> = z.object({
  create: z.union([ z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationCreateWithoutDocumentInputSchema).array(),z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationUncheckedCreateWithoutDocumentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema),z.lazy(() => DocumentAnnotationCreateOrConnectWithoutDocumentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentAnnotationCreateManyDocumentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DocumentAnnotationWhereUniqueInputSchema),z.lazy(() => DocumentAnnotationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DocumentAnnotationUncheckedCreateNestedManyWithoutDocumentInputSchema;
