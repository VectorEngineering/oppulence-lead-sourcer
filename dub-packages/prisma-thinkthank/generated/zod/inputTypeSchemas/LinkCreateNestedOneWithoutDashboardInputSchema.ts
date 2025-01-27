import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LinkCreateWithoutDashboardInputSchema } from './LinkCreateWithoutDashboardInputSchema';
import { LinkUncheckedCreateWithoutDashboardInputSchema } from './LinkUncheckedCreateWithoutDashboardInputSchema';
import { LinkCreateOrConnectWithoutDashboardInputSchema } from './LinkCreateOrConnectWithoutDashboardInputSchema';
import { LinkWhereUniqueInputSchema } from './LinkWhereUniqueInputSchema';

export const LinkCreateNestedOneWithoutDashboardInputSchema: z.ZodType<Prisma.LinkCreateNestedOneWithoutDashboardInput> = z.object({
  create: z.union([ z.lazy(() => LinkCreateWithoutDashboardInputSchema),z.lazy(() => LinkUncheckedCreateWithoutDashboardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LinkCreateOrConnectWithoutDashboardInputSchema).optional(),
  connect: z.lazy(() => LinkWhereUniqueInputSchema).optional()
}).strict();

export default LinkCreateNestedOneWithoutDashboardInputSchema;
