import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutCustomerTagInputSchema } from './ProjectCreateWithoutCustomerTagInputSchema';
import { ProjectUncheckedCreateWithoutCustomerTagInputSchema } from './ProjectUncheckedCreateWithoutCustomerTagInputSchema';

export const ProjectCreateOrConnectWithoutCustomerTagInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutCustomerTagInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomerTagInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutCustomerTagInputSchema;
