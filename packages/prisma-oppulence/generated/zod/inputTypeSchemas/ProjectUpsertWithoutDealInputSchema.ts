import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutDealInputSchema } from './ProjectUpdateWithoutDealInputSchema';
import { ProjectUncheckedUpdateWithoutDealInputSchema } from './ProjectUncheckedUpdateWithoutDealInputSchema';
import { ProjectCreateWithoutDealInputSchema } from './ProjectCreateWithoutDealInputSchema';
import { ProjectUncheckedCreateWithoutDealInputSchema } from './ProjectUncheckedCreateWithoutDealInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutDealInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutDealInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutDealInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutDealInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutDealInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutDealInputSchema;
