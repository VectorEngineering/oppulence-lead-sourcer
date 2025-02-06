import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectCreateWithoutYearInReviewsInputSchema } from './ProjectCreateWithoutYearInReviewsInputSchema';
import { ProjectUncheckedCreateWithoutYearInReviewsInputSchema } from './ProjectUncheckedCreateWithoutYearInReviewsInputSchema';
import { ProjectCreateOrConnectWithoutYearInReviewsInputSchema } from './ProjectCreateOrConnectWithoutYearInReviewsInputSchema';
import { ProjectUpsertWithoutYearInReviewsInputSchema } from './ProjectUpsertWithoutYearInReviewsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutYearInReviewsInputSchema } from './ProjectUpdateToOneWithWhereWithoutYearInReviewsInputSchema';
import { ProjectUpdateWithoutYearInReviewsInputSchema } from './ProjectUpdateWithoutYearInReviewsInputSchema';
import { ProjectUncheckedUpdateWithoutYearInReviewsInputSchema } from './ProjectUncheckedUpdateWithoutYearInReviewsInputSchema';

export const ProjectUpdateOneRequiredWithoutYearInReviewsNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutYearInReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutYearInReviewsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutYearInReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutYearInReviewsInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutYearInReviewsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutYearInReviewsInputSchema),z.lazy(() => ProjectUpdateWithoutYearInReviewsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutYearInReviewsInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutYearInReviewsNestedInputSchema;
