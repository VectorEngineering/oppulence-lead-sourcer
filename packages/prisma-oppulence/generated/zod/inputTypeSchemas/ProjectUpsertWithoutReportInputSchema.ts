import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectUpdateWithoutReportInputSchema } from './ProjectUpdateWithoutReportInputSchema';
import { ProjectUncheckedUpdateWithoutReportInputSchema } from './ProjectUncheckedUpdateWithoutReportInputSchema';
import { ProjectCreateWithoutReportInputSchema } from './ProjectCreateWithoutReportInputSchema';
import { ProjectUncheckedCreateWithoutReportInputSchema } from './ProjectUncheckedCreateWithoutReportInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutReportInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutReportInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutReportInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutReportInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutReportInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutReportInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutReportInputSchema;
