import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutLeadInputSchema } from './ProjectUpdateWithoutLeadInputSchema';
import { ProjectUncheckedUpdateWithoutLeadInputSchema } from './ProjectUncheckedUpdateWithoutLeadInputSchema';
import { ProjectCreateWithoutLeadInputSchema } from './ProjectCreateWithoutLeadInputSchema';
import { ProjectUncheckedCreateWithoutLeadInputSchema } from './ProjectUncheckedCreateWithoutLeadInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutLeadInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutLeadInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutLeadInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutLeadInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutLeadInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutLeadInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutLeadInputSchema;
