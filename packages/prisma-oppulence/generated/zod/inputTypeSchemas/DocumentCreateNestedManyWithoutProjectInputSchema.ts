import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutProjectInputSchema } from './DocumentCreateWithoutProjectInputSchema';
import { DocumentUncheckedCreateWithoutProjectInputSchema } from './DocumentUncheckedCreateWithoutProjectInputSchema';
import { DocumentCreateOrConnectWithoutProjectInputSchema } from './DocumentCreateOrConnectWithoutProjectInputSchema';
import { DocumentCreateManyProjectInputEnvelopeSchema } from './DocumentCreateManyProjectInputEnvelopeSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';

export const DocumentCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.DocumentCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutProjectInputSchema),z.lazy(() => DocumentCreateWithoutProjectInputSchema).array(),z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentCreateOrConnectWithoutProjectInputSchema),z.lazy(() => DocumentCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DocumentCreateNestedManyWithoutProjectInputSchema;
