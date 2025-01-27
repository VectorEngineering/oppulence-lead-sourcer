import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutCustomersInputSchema } from './ProjectCreateWithoutCustomersInputSchema';
import { ProjectUncheckedCreateWithoutCustomersInputSchema } from './ProjectUncheckedCreateWithoutCustomersInputSchema';

export const ProjectCreateOrConnectWithoutCustomersInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutCustomersInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomersInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutCustomersInputSchema;
