import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutCustomersInputSchema } from './ProjectUpdateWithoutCustomersInputSchema';
import { ProjectUncheckedUpdateWithoutCustomersInputSchema } from './ProjectUncheckedUpdateWithoutCustomersInputSchema';
import { ProjectCreateWithoutCustomersInputSchema } from './ProjectCreateWithoutCustomersInputSchema';
import { ProjectUncheckedCreateWithoutCustomersInputSchema } from './ProjectUncheckedCreateWithoutCustomersInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutCustomersInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutCustomersInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutCustomersInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutCustomersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutCustomersInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutCustomersInputSchema;
