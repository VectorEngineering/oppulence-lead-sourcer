import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutTagsInputSchema } from './ProjectUpdateWithoutTagsInputSchema';
import { ProjectUncheckedUpdateWithoutTagsInputSchema } from './ProjectUncheckedUpdateWithoutTagsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutTagsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutTagsInputSchema;
