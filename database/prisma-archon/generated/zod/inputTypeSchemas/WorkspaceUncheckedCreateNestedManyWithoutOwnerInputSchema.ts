import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WorkspaceCreateWithoutOwnerInputSchema } from './WorkspaceCreateWithoutOwnerInputSchema';
import { WorkspaceUncheckedCreateWithoutOwnerInputSchema } from './WorkspaceUncheckedCreateWithoutOwnerInputSchema';
import { WorkspaceCreateOrConnectWithoutOwnerInputSchema } from './WorkspaceCreateOrConnectWithoutOwnerInputSchema';
import { WorkspaceCreateManyOwnerInputEnvelopeSchema } from './WorkspaceCreateManyOwnerInputEnvelopeSchema';
import { WorkspaceWhereUniqueInputSchema } from './WorkspaceWhereUniqueInputSchema';

export const WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.WorkspaceUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema),z.lazy(() => WorkspaceCreateWithoutOwnerInputSchema).array(),z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => WorkspaceUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => WorkspaceCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WorkspaceCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WorkspaceWhereUniqueInputSchema),z.lazy(() => WorkspaceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WorkspaceUncheckedCreateNestedManyWithoutOwnerInputSchema;
