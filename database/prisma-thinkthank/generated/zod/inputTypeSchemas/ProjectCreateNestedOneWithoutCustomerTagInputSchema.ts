import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutCustomerTagInputSchema } from './ProjectCreateWithoutCustomerTagInputSchema';
import { ProjectUncheckedCreateWithoutCustomerTagInputSchema } from './ProjectUncheckedCreateWithoutCustomerTagInputSchema';
import { ProjectCreateOrConnectWithoutCustomerTagInputSchema } from './ProjectCreateOrConnectWithoutCustomerTagInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutCustomerTagInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutCustomerTagInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomerTagInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutCustomerTagInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutCustomerTagInputSchema;
