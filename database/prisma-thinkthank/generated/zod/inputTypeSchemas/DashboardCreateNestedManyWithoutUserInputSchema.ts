import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DashboardCreateWithoutUserInputSchema } from './DashboardCreateWithoutUserInputSchema';
import { DashboardUncheckedCreateWithoutUserInputSchema } from './DashboardUncheckedCreateWithoutUserInputSchema';
import { DashboardCreateOrConnectWithoutUserInputSchema } from './DashboardCreateOrConnectWithoutUserInputSchema';
import { DashboardCreateManyUserInputEnvelopeSchema } from './DashboardCreateManyUserInputEnvelopeSchema';
import { DashboardWhereUniqueInputSchema } from './DashboardWhereUniqueInputSchema';

export const DashboardCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.DashboardCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => DashboardCreateWithoutUserInputSchema),z.lazy(() => DashboardCreateWithoutUserInputSchema).array(),z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema),z.lazy(() => DashboardUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DashboardCreateOrConnectWithoutUserInputSchema),z.lazy(() => DashboardCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DashboardCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DashboardWhereUniqueInputSchema),z.lazy(() => DashboardWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DashboardCreateNestedManyWithoutUserInputSchema;
