import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema';
import { WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema } from './WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema';
import { WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema } from './WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema';
import { WorkspaceInvitationWhereUniqueInputSchema } from './WorkspaceInvitationWhereUniqueInputSchema';
import { WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema } from './WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema } from './WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema';
import { WorkspaceInvitationScalarWhereInputSchema } from './WorkspaceInvitationScalarWhereInputSchema';

export const WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInputSchema: z.ZodType<Prisma.WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUpsertWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUpdateWithWhereUniqueWithoutWorkspaceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUpdateManyWithWhereWithoutWorkspaceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WorkspaceInvitationScalarWhereInputSchema),z.lazy(() => WorkspaceInvitationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceInvitationUpdateManyWithoutWorkspaceNestedInputSchema;
