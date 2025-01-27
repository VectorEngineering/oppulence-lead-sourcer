import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutCustomersInputSchema } from './ProjectCreateWithoutCustomersInputSchema';
import { ProjectUncheckedCreateWithoutCustomersInputSchema } from './ProjectUncheckedCreateWithoutCustomersInputSchema';
import { ProjectCreateOrConnectWithoutCustomersInputSchema } from './ProjectCreateOrConnectWithoutCustomersInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutCustomersInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutCustomersInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCustomersInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutCustomersInputSchema;
