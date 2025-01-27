import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutDealInputSchema } from './ProjectCreateWithoutDealInputSchema';
import { ProjectUncheckedCreateWithoutDealInputSchema } from './ProjectUncheckedCreateWithoutDealInputSchema';
import { ProjectCreateOrConnectWithoutDealInputSchema } from './ProjectCreateOrConnectWithoutDealInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutDealInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutDealInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDealInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutDealInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutDealInputSchema;
