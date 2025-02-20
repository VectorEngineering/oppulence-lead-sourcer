import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutTagsInputSchema } from './ProjectCreateWithoutTagsInputSchema';
import { ProjectUncheckedCreateWithoutTagsInputSchema } from './ProjectUncheckedCreateWithoutTagsInputSchema';

export const ProjectCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutTagsInputSchema;
