import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceMemberCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateWithoutWorkspaceInputSchema';
import { WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema';
import { WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema } from './WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema';
import { WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema } from './WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema';
import { WorkspaceMemberWhereUniqueInputSchema } from './WorkspaceMemberWhereUniqueInputSchema';
import { WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema } from './WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { WorkspaceMemberScalarWhereInputSchema } from './WorkspaceMemberScalarWhereInputSchema';

export const WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceMemberCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkspaceMemberWhereUniqueInputSchema),z.lazy(() => WorkspaceMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkspaceMemberScalarWhereInputSchema),z.lazy(() => WorkspaceMemberScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceMemberUpdateManyWithoutWorkspaceNestedInputSchema;
