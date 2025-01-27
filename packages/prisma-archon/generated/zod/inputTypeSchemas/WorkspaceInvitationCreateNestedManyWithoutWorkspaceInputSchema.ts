import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceInvitationCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateWithoutWorkspaceInputSchema';
import { WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema } from './WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema';
import { WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema } from './WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema';
import { WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema } from './WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema';
import { WorkspaceInvitationWhereUniqueInputSchema } from './WorkspaceInvitationWhereUniqueInputSchema';

export const WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema: z.ZodType<Prisma.WorkspaceInvitationCreateNestedManyWithoutWorkspaceInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationCreateWithoutWorkspaceInputSchema).array(),z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationUncheckedCreateWithoutWorkspaceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema),z.lazy(() => WorkspaceInvitationCreateOrConnectWithoutWorkspaceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceInvitationCreateManyWorkspaceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema),z.lazy(() => WorkspaceInvitationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceInvitationCreateNestedManyWithoutWorkspaceInputSchema;
