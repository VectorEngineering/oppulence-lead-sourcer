import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';
import { WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceNestedInputSchema } from './WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceNestedInputSchema';

export const WorkspaceUncheckedUpdateInputSchema: z.ZodType<Prisma.WorkspaceUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional(),
  workspaceInvitations: z.lazy(() => WorkspaceInvitationUncheckedUpdateManyWithoutWorkspaceNestedInputSchema).optional()
}).strict();

export default WorkspaceUncheckedUpdateInputSchema;
