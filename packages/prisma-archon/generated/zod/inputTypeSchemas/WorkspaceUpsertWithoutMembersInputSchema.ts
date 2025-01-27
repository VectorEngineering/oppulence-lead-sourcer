import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceUpdateWithoutMembersInputSchema } from './WorkspaceUpdateWithoutMembersInputSchema';
import { WorkspaceUncheckedUpdateWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateWithoutMembersInputSchema';
import { WorkspaceCreateWithoutMembersInputSchema } from './WorkspaceCreateWithoutMembersInputSchema';
import { WorkspaceUncheckedCreateWithoutMembersInputSchema } from './WorkspaceUncheckedCreateWithoutMembersInputSchema';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';

export const WorkspaceUpsertWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithoutMembersInput> = z.object({
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => WorkspaceWhereInputSchema).optional()
}).strict();

export default WorkspaceUpsertWithoutMembersInputSchema;
