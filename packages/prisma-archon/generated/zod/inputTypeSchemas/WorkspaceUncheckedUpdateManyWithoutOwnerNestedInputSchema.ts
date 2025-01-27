import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutOwnerInputSchema } from './WorkspaceCreateWithoutOwnerInputSchema';
import { WorkspaceUncheckedCreateWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateWithoutOwnerInputSchema';
import { WorkspaceCreateOrConnectWithoutOwnerInputSchema } from './WorkspaceCreateOrConnectWithoutOwnerInputSchema';
import { WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema } from './WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema';
import { WorkspaceCreateManyOwnerInputEnvelopeSchema } from './WorkspaceCreateManyOwnerInputEnvelopeSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema } from './WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema';
import { WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema } from './WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema';
import { WorkspaceScalarWhereInputSchema } from './WorkspaceScalarWhereInputSchema';

export const WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema),z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema).array(),z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => WorkspaceUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => WorkspaceUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkspaceScalarWhereInputSchema),z.lazy(() => WorkspaceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceUncheckedUpdateManyWithoutOwnerNestedInputSchema;
