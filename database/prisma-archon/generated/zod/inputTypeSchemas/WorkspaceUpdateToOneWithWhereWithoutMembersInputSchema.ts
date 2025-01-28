import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereInputSchema } from './WorkspaceWhereInputSchema';
import { WorkspaceUpdateWithoutMembersInputSchema } from './WorkspaceUpdateWithoutMembersInputSchema';
import { WorkspaceUncheckedUpdateWithoutMembersInputSchema } from './WorkspaceUncheckedUpdateWithoutMembersInputSchema';

export const WorkspaceUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.WorkspaceUpdateToOneWithWhereWithoutMembersInput> = z.object({
  where: z.lazy(() => WorkspaceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => WorkspaceUpdateWithoutMembersInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutMembersInputSchema) ]),
}).strict();

export default WorkspaceUpdateToOneWithWhereWithoutMembersInputSchema;
