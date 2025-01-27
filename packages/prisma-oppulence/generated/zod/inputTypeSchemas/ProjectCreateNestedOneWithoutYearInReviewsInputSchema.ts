import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutYearInReviewsInputSchema } from './ProjectCreateWithoutYearInReviewsInputSchema';
import { ProjectUncheckedCreateWithoutYearInReviewsInputSchema } from './ProjectUncheckedCreateWithoutYearInReviewsInputSchema';
import { ProjectCreateOrConnectWithoutYearInReviewsInputSchema } from './ProjectCreateOrConnectWithoutYearInReviewsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutYearInReviewsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutYearInReviewsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutYearInReviewsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutYearInReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutYearInReviewsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutYearInReviewsInputSchema;
