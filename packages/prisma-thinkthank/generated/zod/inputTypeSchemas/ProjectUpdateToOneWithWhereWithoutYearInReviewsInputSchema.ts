import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutYearInReviewsInputSchema } from './ProjectUpdateWithoutYearInReviewsInputSchema';
import { ProjectUncheckedUpdateWithoutYearInReviewsInputSchema } from './ProjectUncheckedUpdateWithoutYearInReviewsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutYearInReviewsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutYearInReviewsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutYearInReviewsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutYearInReviewsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutYearInReviewsInputSchema;
