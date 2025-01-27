import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutOwnerInputSchema } from './DocumentCreateWithoutOwnerInputSchema';
import { DocumentUncheckedCreateWithoutOwnerInputSchema } from './DocumentUncheckedCreateWithoutOwnerInputSchema';
import { DocumentCreateOrConnectWithoutOwnerInputSchema } from './DocumentCreateOrConnectWithoutOwnerInputSchema';
import { DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema } from './DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { DocumentCreateManyOwnerInputEnvelopeSchema } from './DocumentCreateManyOwnerInputEnvelopeSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema } from './DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { DocumentUpdateManyWithWhereWithoutOwnerInputSchema } from './DocumentUpdateManyWithWhereWithoutOwnerInputSchema';
import { DocumentScalarWhereInputSchema } from './DocumentScalarWhereInputSchema';

export const DocumentUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.DocumentUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => DocumentCreateWithoutOwnerInputSchema),z.lazy(() => DocumentCreateWithoutOwnerInputSchema).array(),z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => DocumentUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DocumentCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => DocumentCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => DocumentUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DocumentCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DocumentWhereUniqueInputSchema),z.lazy(() => DocumentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => DocumentUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DocumentUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => DocumentUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DocumentScalarWhereInputSchema),z.lazy(() => DocumentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DocumentUncheckedUpdateManyWithoutOwnerNestedInputSchema;
