import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema';
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema';
import { WorkspaceCreateOrConnectWithoutMembersInputSchema } from './WorkspaceCreateOrConnectWithoutMembersInputSchema';
import { WorkspaceUpsertWithoutMembersInputSchema } from './WorkspaceUpsertWithoutMembersInputSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateToOneWithWhereWithoutMembersInputSchema } from './WorkspaceUpdateToOneWithWhereWithoutMembersInputSchema';
import { WorkspaceUpdateWithoutMembersInputSchema } from './WorkspaceUpdateWithoutMembersInputSchema';
import { WorkspaceUncheckedUpdateWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateWithoutMembersInputSchema';

export const WorkspaceUpdateOneRequiredWithoutMembersNestedInputSchema: z.ZodType<Prisma.WorkspaceUpdateOneRequiredWithoutMembersNestedInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => WorkspaceCreateOrConnectWithoutMembersInputSchema).optional(),
  upsert: z.lazy(() => WorkspaceUpsertWithoutMembersInputSchema).optional(),
  connect: z.lazy(() => WorkspaceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => WorkspaceUpdateToOneWithWhereWithoutMembersInputSchema),z.lazy(() => WorkspaceUpdateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputSchema) ]).optional(),
}).strict();

export default WorkspaceUpdateOneRequiredWithoutMembersNestedInputSchema;
