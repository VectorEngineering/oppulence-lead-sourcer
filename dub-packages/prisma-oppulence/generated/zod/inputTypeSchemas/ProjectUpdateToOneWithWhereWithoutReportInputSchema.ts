import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutReportInputSchema } from './ProjectUpdateWithoutReportInputSchema';
import { ProjectUncheckedUpdateWithoutReportInputSchema } from './ProjectUncheckedUpdateWithoutReportInputSchema';

export const ProjectUpdateToOneWithWhereWithoutReportInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutReportInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutReportInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutReportInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutReportInputSchema;
