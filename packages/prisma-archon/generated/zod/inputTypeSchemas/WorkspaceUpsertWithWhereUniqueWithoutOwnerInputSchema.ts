import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';
import { WorkspaceUpdateWithoutOwnerInputSchema } from './WorkspaceUpdateWithoutOwnerInputSchema';
import { WorkspaceUncheckedUpdateWithoutOwnerInputSchema } from './WorkspaceUncheckedUpdateWithoutOwnerInputSchema';
import { WorkspaceCreateWithoutOwnerInputSchema } from './WorkspaceCreateWithoutOwnerInputSchema';
import { WorkspaceUncheckedCreateWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateWithoutOwnerInputSchema';

export const WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => WorkspaceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WorkspaceUpdateWithoutOwnerInputSchema),z.lazy(() => WorkspaceUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export default WorkspaceUpsertWithWhereUniqueWithoutOwnerInputSchema;
