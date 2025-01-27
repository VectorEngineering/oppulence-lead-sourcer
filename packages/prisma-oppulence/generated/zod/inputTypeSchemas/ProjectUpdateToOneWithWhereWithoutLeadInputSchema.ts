import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutLeadInputSchema } from './ProjectUpdateWithoutLeadInputSchema';
import { ProjectUncheckedUpdateWithoutLeadInputSchema } from './ProjectUncheckedUpdateWithoutLeadInputSchema';

export const ProjectUpdateToOneWithWhereWithoutLeadInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutLeadInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutLeadInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutLeadInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutLeadInputSchema;
