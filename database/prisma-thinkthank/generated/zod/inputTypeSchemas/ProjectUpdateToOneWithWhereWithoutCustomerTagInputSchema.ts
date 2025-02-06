import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutCustomerTagInputSchema } from './ProjectUpdateWithoutCustomerTagInputSchema';
import { ProjectUncheckedUpdateWithoutCustomerTagInputSchema } from './ProjectUncheckedUpdateWithoutCustomerTagInputSchema';

export const ProjectUpdateToOneWithWhereWithoutCustomerTagInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutCustomerTagInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutCustomerTagInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCustomerTagInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutCustomerTagInputSchema;
