import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutCustomerTagInputSchema } from './ProjectUpdateWithoutCustomerTagInputSchema';
import { ProjectUncheckedUpdateWithoutCustomerTagInputSchema } from './ProjectUncheckedUpdateWithoutCustomerTagInputSchema';
import { ProjectCreateWithoutCustomerTagInputSchema } from './ProjectCreateWithoutCustomerTagInputSchema';
import { ProjectUncheckedCreateWithoutCustomerTagInputSchema } from './ProjectUncheckedCreateWithoutCustomerTagInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutCustomerTagInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutCustomerTagInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCustomerTagInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomerTagInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutCustomerTagInputSchema;
