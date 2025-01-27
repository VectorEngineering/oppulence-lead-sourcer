import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutDealInputSchema } from './ProjectCreateWithoutDealInputSchema';
import { ProjectUncheckedCreateWithoutDealInputSchema } from './ProjectUncheckedCreateWithoutDealInputSchema';

export const ProjectCreateOrConnectWithoutDealInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutDealInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDealInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutDealInputSchema;
